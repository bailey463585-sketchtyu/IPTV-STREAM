import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('streamora_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('streamora_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#121215] border border-white/10 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#FAF92A]/10 text-[#FAF92A] shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-xs text-neutral-300 space-y-1">
          <p className="font-semibold text-white">Privacy & Streaming Performance</p>
          <p className="text-neutral-400 leading-relaxed text-[11px]">
            We use essential cookies to maintain your active streaming session and enhance video buffer caching.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-bold rounded-lg text-xs transition-colors cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={() => setVisible(false)}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-lg text-xs transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
