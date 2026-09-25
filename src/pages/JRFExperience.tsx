import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Plus, Lock, Unlock, ArrowLeft, RefreshCw } from 'lucide-react';
import { getAllCards } from '@/lib/jrfApi';
import PasskeyModal from '@/components/jrf/PasskeyModal';
import CardForm from '@/components/jrf/CardForm';
import MonthCard from '@/components/jrf/MonthCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CardData {
  monthId: string; title: string; period: string; summary: string;
  tasks: { task: string; subtasks: string[] }[];
  highlights: string[]; resources: { label: string; url: string; type: string }[];
  images: { url: string; caption: string }[];
  createdAt?: string; updatedAt?: string;
}

const JRFExperience = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [passkey, setPasskey] = useState('');
  const [showPasskey, setShowPasskey] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editCard, setEditCard] = useState<CardData | null>(null);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await getAllCards();
      setCards(res.cards || []);
    } catch { /* silent */ }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchCards(); }, []);

  const handlePasskeySuccess = (pk: string) => {
    setPasskey(pk);
    setIsAdmin(true);
    setShowPasskey(false);
  };

  const handleLock = () => { setIsAdmin(false); setPasskey(''); };

  const handleSaved = () => {
    setShowForm(false);
    setEditCard(null);
    fetchCards();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Page Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <FlaskConical className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                    British Academy (UK) Funded
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  JRF Research Journey
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl">
                  Junior Research Fellow @ <strong>BITS Pilani, Hyderabad</strong> — BREATHE Project.
                  A month-by-month log of research tasks, milestones, and resources.
                </p>
              </div>

              {/* Admin controls */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={fetchCards} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="Refresh">
                  <RefreshCw className="h-4 w-4 text-gray-500" />
                </button>
                {isAdmin ? (
                  <>
                    <button onClick={() => { setEditCard(null); setShowForm(true); }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-md">
                      <Plus className="h-4 w-4" /> Add Month
                    </button>
                    <button onClick={handleLock}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <Unlock className="h-4 w-4 text-emerald-500" /> Admin
                    </button>
                  </>
                ) : (
                  <button onClick={() => setShowPasskey(true)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Lock className="h-4 w-4 text-gray-400" /> Admin
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Months Logged', value: cards.length },
              { label: 'Total Tasks', value: cards.reduce((a, c) => a + (c.tasks?.length || 0), 0) },
              { label: 'Highlights', value: cards.reduce((a, c) => a + (c.highlights?.length || 0), 0) },
            ].map(s => (
              <div key={s.label} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 text-center">
                <span className="block text-2xl font-bold text-emerald-600">{s.value}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Cards */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : cards.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
              <FlaskConical className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No months logged yet.</p>
              {isAdmin && (
                <button onClick={() => setShowForm(true)}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors">
                  <Plus className="h-4 w-4" /> Add First Month
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {cards.map((card, i) => (
                <MonthCard
                  key={card.monthId}
                  card={card}
                  index={i}
                  isAdmin={isAdmin}
                  passkey={passkey}
                  onEdit={c => { setEditCard(c); setShowForm(true); }}
                  onDeleted={fetchCards}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      {showPasskey && (
        <PasskeyModal
          onSuccess={handlePasskeySuccess}
          onClose={() => setShowPasskey(false)}
        />
      )}
      {showForm && (
        <CardForm
          passkey={passkey}
          existing={editCard || undefined}
          onSaved={handleSaved}
          onClose={() => { setShowForm(false); setEditCard(null); }}
        />
      )}
    </div>
  );
};

export default JRFExperience;
