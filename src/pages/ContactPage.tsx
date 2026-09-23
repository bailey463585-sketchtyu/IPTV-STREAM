import React, { useState } from 'react';
import { Mail, Phone, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    // Simulate API submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 900);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Communications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Contact Customer Care
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300">
          Have an inquiry, need device configuration assistance, or want to activate a custom bouquet? Reach our engineering desk anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct Highlight Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FAF92A]/15 via-[#18181D] to-[#FDBF2D]/10 border-2 border-[#FAF92A]/50 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF92A] text-black flex items-center justify-center font-bold">
                <MessageSquare className="w-6 h-6 fill-black" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#FAF92A] block">
                  Priority 24/7 Hotline
                </span>
                <h3 className="text-lg font-black text-white">WhatsApp Fast Desk</h3>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Connect directly with our senior technicians for instantaneous responses, test lines, and subscription renewals.
            </p>

            <a
              href={getWhatsAppLink('Hello Streamora! I am contacting you from your official website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Launch WhatsApp Chat</span>
            </a>
          </div>

          {/* Email & Hours Info */}
          <div className="p-6 rounded-3xl bg-[#121215] border border-white/10 space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#FAF92A] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block text-sm mb-0.5">Email Support</strong>
                <p className="text-neutral-400">support@streamora.tv</p>
                <p className="text-neutral-500 text-[11px] mt-0.5">Average ticket response: &lt; 20 minutes</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/5 pt-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#FAF92A] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block text-sm mb-0.5">Operational Hours</strong>
                <p className="text-neutral-400">24 Hours / 7 Days a Week / 365 Days</p>
                <p className="text-neutral-500 text-[11px] mt-0.5">Engineers on standby around the clock</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-white/5 pt-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-[#FAF92A] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block text-sm mb-0.5">Global Relay Hubs</strong>
                <p className="text-neutral-400">Frankfurt, London, Dubai, New York, Singapore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
          <h2 className="text-2xl font-black text-white mb-2">Send a Message</h2>
          <p className="text-xs text-neutral-400 mb-6">
            Fill out the form below and our helpdesk will get in touch with you right away.
          </p>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-[#FAF92A]/10 border border-[#FAF92A]/40 text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#FAF92A] text-black flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Message Dispatched!</h3>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                Thank you for contacting Streamora. Our support team will respond to your email shortly, or connect with you on WhatsApp.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Full Name <span className="text-[#FAF92A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address <span className="text-[#FAF92A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 555 019 2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smart TV Setup Help, Billing..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Message Details <span className="text-[#FAF92A]">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your device, inquiry, or subscription question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-[#FAF92A] to-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-[#FAF92A]/20 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Transmitting Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-black" />
                    <span>Send Message to Support</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
