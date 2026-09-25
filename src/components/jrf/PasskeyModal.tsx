import { useState, useEffect } from 'react';
import { Lock, X } from 'lucide-react';
import { verifyPasskey } from '@/lib/jrfApi';

interface Props {
  onSuccess: (passkey: string) => void;
  onClose: () => void;
}

const PasskeyModal = ({ onSuccess, onClose }: Props) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await verifyPasskey(key);
      if (res.valid) { onSuccess(key); }
      else { setError('Invalid passkey.'); setKey(''); }
    } catch { setError('Network error.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="h-5 w-5" /></button>
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mb-3">
            <Lock className="h-7 w-7 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold">Admin Access</h2>
          <p className="text-sm text-gray-500 mt-1">Enter your 4-digit passkey</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input
            type="password" maxLength={4} value={key}
            onChange={e => setKey(e.target.value.replace(/\D/g, ''))}
            placeholder="••••"
            className="w-full text-center text-2xl tracking-[1rem] border-2 border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-emerald-500"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" disabled={loading || key.length !== 4}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:opacity-50 transition-colors">
            {loading ? 'Verifying...' : 'Unlock'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasskeyModal;
