import React, { useState } from 'react';
import { Lock, Mail, User, ShieldCheck, ArrowRight, Tv, CheckCircle2, MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE_RAW, getWhatsAppLink } from '../utils/whatsapp';

interface AuthPageProps {
  initialMode?: 'login' | 'signup';
  onSuccessAuth: (userData: { name: string; email: string }) => void;
  onNavigate: (page: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  initialMode = 'login',
  onSuccessAuth,
  onNavigate,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (!agreeTerms) {
        setError('Please agree to the Terms of Service.');
        return;
      }
    }

    // Authenticate & proceed to customer dashboard
    onSuccessAuth({
      name: name || (email.split('@')[0] || 'Subscriber'),
      email: email || 'user@streamora.tv',
    });
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-md mx-auto px-4 sm:px-6">
      <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Brand Icon Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF92A] to-[#FDBF2D] flex items-center justify-center text-black mx-auto shadow-md">
            <Tv className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-black text-white">
            {mode === 'login' ? 'Subscriber Sign In' : 'Create Streamora Account'}
          </h1>
          <p className="text-xs text-neutral-400">
            {mode === 'login'
              ? 'Access your M3U playlists, Xtream API, and active subscriptions'
              : 'Join thousands enjoying buffer-free television worldwide'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 text-xs">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`flex-1 py-2 rounded-lg font-bold transition-all cursor-pointer ${
              mode === 'login' ? 'bg-[#FAF92A] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError('');
            }}
            className={`flex-1 py-2 rounded-lg font-bold transition-all cursor-pointer ${
              mode === 'signup' ? 'bg-[#FAF92A] text-black shadow-sm' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Email Address / Username
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="subscriber@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-neutral-300">
                Password
              </label>
              {mode === 'login' && (
                <button
                  type="button"
                  onClick={() => alert('Password reset instructions dispatched to your email.')}
                  className="text-[11px] text-[#FAF92A] hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
              />
            </div>
          </div>

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                />
              </div>
            </div>
          )}

          {mode === 'signup' && (
            <div className="flex items-start gap-2 pt-1 text-xs text-neutral-400">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 rounded text-[#FAF92A] focus:ring-0"
              />
              <label htmlFor="terms">
                I agree to the{' '}
                <button type="button" onClick={() => onNavigate('terms')} className="text-[#FAF92A] underline">
                  Terms of Service
                </button>{' '}
                and Privacy Policy.
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
          >
            <span>{mode === 'login' ? 'Sign In to Dashboard' : 'Complete Registration'}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </form>

        {/* WhatsApp Help Footer */}
        <div className="pt-4 border-t border-white/10 text-center text-xs text-neutral-400 space-y-2">
          <p>Need instant activation without creating an account online?</p>
          <a
            href={getWhatsAppLink('Hello Streamora! I need assistance signing in or creating my subscription.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAF92A] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
