import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { addCard, updateCard } from '@/lib/jrfApi';

interface Resource { label: string; url: string; type: 'link' | 'doc' | 'sheet' | 'github' | 'drive'; }
interface Task { task: string; subtasks: string[]; }
interface CardData {
  monthId?: string; title?: string; period?: string; summary?: string;
  tasks?: Task[]; highlights?: string[]; resources?: Resource[]; images?: { url: string; caption: string }[];
}

interface Props {
  passkey: string;
  existing?: CardData;
  onSaved: () => void;
  onClose: () => void;
}

const empty = (): CardData => ({
  monthId: '', title: '', period: '', summary: '',
  tasks: [], highlights: [], resources: [], images: [],
});

const CardForm = ({ passkey, existing, onSaved, onClose }: Props) => {
  const [form, setForm] = useState<CardData>(existing ? { ...existing } : empty());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const set = (k: keyof CardData, v: unknown) => setForm(f => ({ ...f, [k]: v }));

  // Tasks
  const addTask = () => set('tasks', [...(form.tasks || []), { task: '', subtasks: [] }]);
  const setTask = (i: number, v: string) => {
    const t = [...(form.tasks || [])]; t[i] = { ...t[i], task: v }; set('tasks', t);
  };
  const removeTask = (i: number) => set('tasks', (form.tasks || []).filter((_, j) => j !== i));
  const addSubtask = (i: number) => {
    const t = [...(form.tasks || [])]; t[i] = { ...t[i], subtasks: [...t[i].subtasks, ''] }; set('tasks', t);
  };
  const setSubtask = (i: number, j: number, v: string) => {
    const t = [...(form.tasks || [])]; const s = [...t[i].subtasks]; s[j] = v; t[i] = { ...t[i], subtasks: s }; set('tasks', t);
  };
  const removeSubtask = (i: number, j: number) => {
    const t = [...(form.tasks || [])]; t[i] = { ...t[i], subtasks: t[i].subtasks.filter((_, k) => k !== j) }; set('tasks', t);
  };

  // Highlights
  const addHL = () => set('highlights', [...(form.highlights || []), '']);
  const setHL = (i: number, v: string) => { const h = [...(form.highlights || [])]; h[i] = v; set('highlights', h); };
  const removeHL = (i: number) => set('highlights', (form.highlights || []).filter((_, j) => j !== i));

  // Resources
  const addRes = () => set('resources', [...(form.resources || []), { label: '', url: '', type: 'link' }]);
  const setRes = (i: number, k: keyof Resource, v: string) => {
    const r = [...(form.resources || [])]; r[i] = { ...r[i], [k]: v }; set('resources', r);
  };
  const removeRes = (i: number) => set('resources', (form.resources || []).filter((_, j) => j !== i));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.monthId) { setError('Month ID is required (e.g. 2026-09)'); return; }
    setLoading(true); setError('');
    try {
      if (existing) { await updateCard(passkey, form); }
      else { await addCard(passkey, form); }
      onSaved();
    } catch { setError('Failed to save. Try again.'); }
    finally { setLoading(false); }
  };

  const inputCls = "w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:outline-none focus:border-emerald-500";
  const labelCls = "block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-8 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl relative">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold">{existing ? 'Edit Month Card' : 'Add Month Card'}</h2>
          <button onClick={onClose}><X className="h-5 w-5 text-gray-400 hover:text-gray-600" /></button>
        </div>

        <form onSubmit={submit} className="p-6 space-y-5">
          {/* Basic fields */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelCls}>Entry ID *</label>
              <input className={inputCls} placeholder="202609 or 202609-A" value={form.monthId || ''} onChange={e => set('monthId', e.target.value)} disabled={!!existing} />
              <p className="text-xs text-gray-400 mt-1">e.g. 202609, 202609-A, 202609-B</p>
            </div>
            <div>
              <label className={labelCls}>Period / Date Range</label>
              <input className={inputCls} placeholder="1–15 Sept 2026" value={form.period || ''} onChange={e => set('period', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Title</label>
              <input className={inputCls} placeholder="Onboarding & Setup" value={form.title || ''} onChange={e => set('title', e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Summary</label>
            <textarea className={inputCls} rows={3} placeholder="Brief summary of this month..." value={form.summary || ''} onChange={e => set('summary', e.target.value)} />
          </div>

          {/* Tasks */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelCls}>Tasks</label>
              <button type="button" onClick={addTask} className="text-xs text-emerald-600 hover:text-emerald-700 flex items-center gap-1"><Plus className="h-3 w-3" />Add Task</button>
            </div>
            <div className="space-y-3">
              {(form.tasks || []).map((t, i) => (
                <div key={i} className="border border-gray-100 dark:border-gray-800 rounded-lg p-3">
                  <div className="flex gap-2 mb-2">
                    <input className={inputCls} placeholder="Task description" value={t.task} onChange={e => setTask(i, e.target.value)} />
                    <button type="button" onClick={() => removeTask(i)}><Trash2 className="h-4 w-4 text-red-400" /></button>
                  </div>
                  <div className="pl-4 space-y-1">
                    {t.subtasks.map((s, j) => (
                      <div key={j} className="flex gap-2">
                        <input className={inputCls} placeholder="Subtask" value={s} onChange={e => setSubtask(i, j, e.target.value)} />
                        <button type="button" onClick={() => removeSubtask(i, j)}><X className="h-3 w-3 text-red-400" /></button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addSubtask(i)} className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 mt-1"><Plus className="h-3 w-3" />Subtask</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelCls}>Highlights / Milestones</label>
              <button type="button" onClick={addHL} className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1"><Plus className="h-3 w-3" />Add</button>
            </div>
            <div className="space-y-2">
              {(form.highlights || []).map((h, i) => (
                <div key={i} className="flex gap-2">
                  <input className={inputCls} placeholder="Highlight or milestone" value={h} onChange={e => setHL(i, e.target.value)} />
                  <button type="button" onClick={() => removeHL(i)}><Trash2 className="h-4 w-4 text-red-400" /></button>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className={labelCls}>Resources & Links</label>
              <button type="button" onClick={addRes} className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"><Plus className="h-3 w-3" />Add</button>
            </div>
            <div className="space-y-2">
              {(form.resources || []).map((r, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <select className={`${inputCls} w-28`} value={r.type} onChange={e => setRes(i, 'type', e.target.value)}>
                    <option value="link">🔗 Link</option>
                    <option value="doc">📄 Doc</option>
                    <option value="sheet">📊 Sheet</option>
                    <option value="github">🐙 GitHub</option>
                    <option value="drive">📁 Drive</option>
                  </select>
                  <input className={inputCls} placeholder="Label" value={r.label} onChange={e => setRes(i, 'label', e.target.value)} />
                  <input className={inputCls} placeholder="https://..." value={r.url} onChange={e => setRes(i, 'url', e.target.value)} />
                  <button type="button" onClick={() => removeRes(i)}><Trash2 className="h-4 w-4 text-red-400" /></button>
                </div>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold disabled:opacity-50 transition-colors">
              {loading ? 'Saving...' : existing ? 'Update Card' : 'Add Card'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
