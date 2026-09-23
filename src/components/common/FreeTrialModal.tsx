import React, { useState } from 'react';
import { X, Zap, CheckCircle2, Copy, Check, MessageSquare, Tv, Smartphone, Laptop, Monitor } from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getFreeTrialWhatsAppLink } from '../../utils/whatsapp';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchPlayer?: (channelName: string) => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, onLaunchPlayer }) => {
  const [selectedDevice, setSelectedDevice] = useState('Smart TV (Samsung/LG)');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const devices = [
    { id: 'Smart TV (Samsung/LG)', label: 'Smart TV (Samsung/LG)', icon: Tv },
    { id: 'Amazon Firestick / 4K Max', label: 'Amazon Firestick', icon: Monitor },
    { id: 'Android TV / Box / Shield', label: 'Android TV / Box', icon: Monitor },
    { id: 'Apple TV / iOS', label: 'Apple TV / iPhone', icon: Smartphone },
    { id: 'Windows PC / Mac', label: 'PC / Mac', icon: Laptop },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const demoCredentials = {
    m3u: 'http://cdn.streamora.tv:8080/get.php?username=trial_demo_982&password=str_24h_pass&type=m3u_plus&output=ts',
    serverUrl: 'http://cdn.streamora.tv:8080',
    username: 'trial_demo_982',
    password: 'str_24h_pass',
    expiresIn: '24 Hours (Active)',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#121215] border border-[#FDBF2D]/30 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close Free Trial modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-[#FAF92A] text-xs font-semibold mb-3">
                <Zap className="w-3.5 h-3.5 fill-[#FAF92A]" />
                <span>100% Free · No Credit Card Required</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Start Your <span className="text-[#FAF92A]">24-Hour Free Trial</span>
              </h3>
              <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
                Experience crystal-clear 4K sports, 20,000+ live channels, and zero-buffering server performance on your favorite device.
              </p>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#FAF92A]/15 to-[#FDBF2D]/10 border border-[#FAF92A]/30 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#FAF92A]" />
                    <span>Fastest: Request via WhatsApp</span>
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Get your test line dispatched in 2 minutes directly to your chat.
                  </p>
                </div>
                <a
                  href={getFreeTrialWhatsAppLink(selectedDevice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black text-xs font-extrabold rounded-lg whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-black" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Select Your Target Device
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {devices.map((dev) => {
                    const Icon = dev.icon;
                    const isSelected = selectedDevice === dev.id;
                    return (
                      <button
                        type="button"
                        key={dev.id}
                        onClick={() => setSelectedDevice(dev.id)}
                        className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FAF92A]/15 border-[#FAF92A] text-white font-semibold'
                            : 'bg-white/5 border-white/10 text-neutral-400 hover:border-white/20'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FAF92A]' : 'text-neutral-400'}`} />
                        <span className="text-xs truncate">{dev.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Your WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 555 019 2834 or +44..."
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-[#FAF92A] to-[#FDBF2D] text-black font-extrabold text-sm rounded-xl hover:shadow-[0_0_20px_rgba(250,249,42,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  Generate Instant Test Line
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center">
                Need immediate human assistance? Message our direct desk on WhatsApp for 2-minute activation.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen with Demo Test Line */
          <div className="text-center py-2 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-[#FAF92A]/20 text-[#FAF92A] flex items-center justify-center mx-auto mb-4 border border-[#FAF92A]/40">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-white">Your Trial Line is Ready!</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
              Your 24-hour test credentials have been provisioned for {selectedDevice}. Copy below or test in player.
            </p>

            <div className="mt-5 bg-white/5 border border-white/10 rounded-xl p-4 text-left space-y-3 font-mono text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1 font-sans">
                  Server URL (Xtream Codes API)
                </span>
                <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-lg text-neutral-200">
                  <span className="truncate">{demoCredentials.serverUrl}</span>
                  <button
                    onClick={() => copyToClipboard(demoCredentials.serverUrl, 'server')}
                    className="p-1 hover:text-[#FAF92A] ml-2 text-neutral-400 cursor-pointer"
                    title="Copy Server URL"
                  >
                    {copiedKey === 'server' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1 font-sans">
                    Username
                  </span>
                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-lg text-neutral-200">
                    <span className="truncate">{demoCredentials.username}</span>
                    <button
                      onClick={() => copyToClipboard(demoCredentials.username, 'user')}
                      className="p-1 hover:text-[#FAF92A] text-neutral-400 cursor-pointer"
                    >
                      {copiedKey === 'user' ? <Check className="w-3.5 h-3.5 text-[#FAF92A]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1 font-sans">
                    Password
                  </span>
                  <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-lg text-neutral-200">
                    <span className="truncate">{demoCredentials.password}</span>
                    <button
                      onClick={() => copyToClipboard(demoCredentials.password, 'pass')}
                      className="p-1 hover:text-[#FAF92A] text-neutral-400 cursor-pointer"
                    >
                      {copiedKey === 'pass' ? <Check className="w-3.5 h-3.5 text-[#FAF92A]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-1 font-sans">
                  M3U Plus Playlist URL
                </span>
                <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-lg text-neutral-200">
                  <span className="truncate text-[11px]">{demoCredentials.m3u}</span>
                  <button
                    onClick={() => copyToClipboard(demoCredentials.m3u, 'm3u')}
                    className="p-1 hover:text-[#FAF92A] ml-2 text-neutral-400 cursor-pointer"
                    title="Copy M3U URL"
                  >
                    {copiedKey === 'm3u' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={getFreeTrialWhatsAppLink(selectedDevice)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Confirm on WhatsApp</span>
              </a>

              {onLaunchPlayer && (
                <button
                  onClick={() => {
                    onClose();
                    onLaunchPlayer('Prime Sports Ultra 4K');
                  }}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Tv className="w-4 h-4 text-[#FAF92A]" />
                  Launch Web Test Stream
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
