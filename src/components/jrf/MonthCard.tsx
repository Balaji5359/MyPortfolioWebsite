import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Pencil, Trash2, Star, CheckSquare, Link2, FileText, Sheet, Github, FolderOpen } from 'lucide-react';
import { deleteCard } from '@/lib/jrfApi';

interface Resource { label: string; url: string; type: string; }
interface Task { task: string; subtasks: string[]; }
interface CardData {
  monthId: string; title: string; period: string; summary: string;
  tasks: Task[]; highlights: string[]; resources: Resource[];
  images: { url: string; caption: string }[];
  createdAt?: string; updatedAt?: string;
}

interface Props {
  card: CardData;
  isAdmin: boolean;
  passkey: string;
  onEdit: (card: CardData) => void;
  onDeleted: () => void;
  index: number;
}

const resIcon: Record<string, React.ReactNode> = {
  link:   <Link2 className="h-3.5 w-3.5" />,
  doc:    <FileText className="h-3.5 w-3.5" />,
  sheet:  <ExternalLink className="h-3.5 w-3.5" />,
  github: <Github className="h-3.5 w-3.5" />,
  drive:  <FolderOpen className="h-3.5 w-3.5" />,
};

const resColor: Record<string, string> = {
  link:   'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
  doc:    'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800',
  sheet:  'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
  github: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
  drive:  'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
};

const MonthCard = ({ card, isAdmin, passkey, onEdit, onDeleted, index }: Props) => {
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Lock body scroll when expanded? No — just card expand. Lock only on modal (CardForm).

  const handleDelete = async () => {
    if (!confirm(`Delete card "${card.title}"?`)) return;
    setDeleting(true);
    try { await deleteCard(passkey, card.monthId); onDeleted(); }
    catch { alert('Delete failed.'); }
    finally { setDeleting(false); }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between p-5 cursor-pointer" onClick={() => setOpen(o => !o)}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-bold text-sm">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div>
            {/* ID badge — prominent, always visible */}
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 tracking-wider">
                ID: {card.monthId}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                {card.period || '—'}
              </span>
              {card.highlights?.length > 0 && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-700 flex items-center gap-1">
                  <Star className="h-3 w-3" /> {card.highlights.length} highlight{card.highlights.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">{card.title}</h3>
            {!open && card.summary && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">{card.summary}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
          {isAdmin && (
            <>
              <button onClick={e => { e.stopPropagation(); onEdit(card); }}
                className="p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-500 transition-colors">
                <Pencil className="h-4 w-4" />
              </button>
              <button onClick={e => { e.stopPropagation(); handleDelete(); }} disabled={deleting}
                className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-red-400 transition-colors">
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          )}
          {open ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </div>
      </div>

      {/* Expanded body */}
      {open && (
        <div className="px-5 pb-5 space-y-5 border-t border-gray-100 dark:border-gray-800 pt-4">
          {/* Summary */}
          {card.summary && (
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{card.summary}</p>
          )}

          {/* Tasks */}
          {card.tasks?.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                <CheckSquare className="h-3.5 w-3.5" /> Tasks
              </h4>
              <div className="space-y-2">
                {card.tasks.map((t, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-200">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">▸</span>
                      <span className="font-medium">{t.task}</span>
                    </div>
                    {t.subtasks?.length > 0 && (
                      <ul className="ml-6 mt-1 space-y-0.5">
                        {t.subtasks.map((s, j) => (
                          <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                            <span className="text-gray-400 mt-0.5">–</span> {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {card.highlights?.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-yellow-500" /> Highlights & Milestones
              </h4>
              <div className="flex flex-wrap gap-2">
                {card.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800">
                    🌟 {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          {card.resources?.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                <Link2 className="h-3.5 w-3.5" /> Resources & Links
              </h4>
              <div className="flex flex-wrap gap-2">
                {card.resources.map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-opacity hover:opacity-80 ${resColor[r.type] || resColor.link}`}>
                    {resIcon[r.type] || resIcon.link}
                    {r.label}
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {card.updatedAt && (
            <p className="text-xs text-gray-400 text-right">Updated: {card.updatedAt}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MonthCard;
