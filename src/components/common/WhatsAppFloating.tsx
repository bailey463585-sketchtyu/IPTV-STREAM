import React, { useState } from 'react';
import { MessageCircle, X, Send, Zap, ShieldCheck, ExternalLink } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_PHONE_RAW, getWhatsAppLink, getFreeTrialWhatsAppLink, getPricingWhatsAppLink } from '../../utils/whatsapp';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const text = customMsg.trim() || 'Hello Streamora! I would like details about IPTV streaming.';
    window.open(getWhatsAppLink(text), '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box (Shown ONLY when the user clicks the WhatsApp icon) */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#121215] border border-[#FAF92A]/40 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FAF92A] to-[#FDBF2D] p-4 text-black flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center font-bold">
                <MessageCircle className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm tracking-tight text-black">Streamora VIP Desk</h4>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-black/80">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span>Online · Instant Response</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/10 text-black transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-sm">
            {/* Revealed upon clicking WhatsApp icon */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-neutral-300 text-xs leading-relaxed space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Direct WhatsApp Desk:</span>
                <span className="text-[#FAF92A] font-bold text-xs bg-black/50 px-2.5 py-1 rounded border border-[#FAF92A]/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FAF92A]" />
                  <span>Verified Agent</span>
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Chat directly with our senior technicians for 24-hour test lines, setup assistance, and subscription activations.
              </p>
            </div>

            {/* Big 1-Click Launch WhatsApp Button */}
            <a
              href={getWhatsAppLink('Hello Streamora! I clicked the WhatsApp icon on your website and want to chat.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Open Chat in WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                Quick Inquiries:
              </p>
              
              <a
                href={getFreeTrialWhatsAppLink('Smart TV / Firestick')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 text-xs bg-white/5 hover:bg-[#FAF92A]/10 hover:border-[#FAF92A]/40 border border-white/10 rounded-lg text-neutral-200 hover:text-white flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#FAF92A]" />
                  <span>Claim 24-Hour Free Trial</span>
                </span>
                <span className="text-[10px] text-[#FAF92A] font-semibold group-hover:underline">Send →</span>
              </a>

              <a
                href={getPricingWhatsAppLink('12 Months Ultimate', 79.99, 2)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 text-xs bg-white/5 hover:bg-[#FAF92A]/10 hover:border-[#FAF92A]/40 border border-white/10 rounded-lg text-neutral-200 hover:text-white flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span>🔥 Order 12-Month Plan ($79.99)</span>
                <span className="text-[10px] text-[#FAF92A] font-semibold group-hover:underline">Send →</span>
              </a>

              <a
                href={getPricingWhatsAppLink('1 Month Access', 12.99, 1)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 text-xs bg-white/5 hover:bg-[#FAF92A]/10 hover:border-[#FAF92A]/40 border border-white/10 rounded-lg text-neutral-200 hover:text-white flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span>⚡ Order 1-Month Plan ($12.99)</span>
                <span className="text-[10px] text-[#FAF92A] font-semibold group-hover:underline">Send →</span>
              </a>

              <a
                href={getWhatsAppLink('Hello Streamora! I need assistance setting up my device.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 text-xs bg-white/5 hover:bg-[#FAF92A]/10 hover:border-[#FAF92A]/40 border border-white/10 rounded-lg text-neutral-200 hover:text-white flex items-center justify-between transition-colors group cursor-pointer"
              >
                <span>🛠️ Device Setup Assistance</span>
                <span className="text-[10px] text-[#FAF92A] font-semibold group-hover:underline">Send →</span>
              </a>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="pt-2 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-bold text-xs rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                title="Send to WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button - ONLY SHOWS WHATSAPP ICON (NO PHONE NUMBER TEXT) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#FAF92A] to-[#FDBF2D] text-black rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(250,249,42,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="WhatsApp Support"
        title="WhatsApp Support"
      >
        <span className="relative flex h-3 w-3 absolute -top-1 -right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF92A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FAF92A] border-2 border-black"></span>
        </span>
        <MessageCircle className="w-7 h-7 stroke-[2.5]" />
      </button>
    </div>
  );
};
