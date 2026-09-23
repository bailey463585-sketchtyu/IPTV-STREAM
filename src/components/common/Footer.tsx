import React from 'react';
import { Tv, MessageSquare, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink } from '../../utils/whatsapp';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenFreeTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenFreeTrial }) => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10 text-neutral-400 text-sm">
      {/* Top Banner: WhatsApp Direct Hotline */}
      <div className="border-b border-white/10 py-6 bg-gradient-to-r from-[#FAF92A]/5 via-transparent to-[#FDBF2D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF92A]/15 border border-[#FAF92A]/30 flex items-center justify-center text-[#FAF92A]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">
                Need Instant Setup or Custom Activation?
              </p>
              <p className="text-xs text-neutral-400">
                Our support desk is online 24/7 on WhatsApp for immediate response.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink('Hello Streamora! I would like help setting up my IPTV service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={onOpenFreeTrial}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/15 cursor-pointer transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FAF92A] to-[#FDBF2D] flex items-center justify-center text-black">
                <Tv className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Streamora<span className="text-[#FAF92A]">.</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Streamora is a premium television streaming service engineered for modern smart displays, streaming sticks, and mobile platforms. Built on resilient ultra-low latency CDN edge servers.
            </p>
            <div className="pt-2 text-xs space-y-1 text-neutral-300">
              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppLink('Hello Streamora! I would like to chat.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#FAF92A] transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
                  <span>24/7 WhatsApp VIP Desk</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FAF92A]" />
                <span>Email: support@streamora.tv</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('channels')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Live Channels List
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sports')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Live Sports & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('entertainment')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Movies & Series (VOD)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Anti-Freeze 9.4 Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Pricing Plans & Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('devices')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Supported Devices
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">Support & Guides</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  IPTV Setup Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Contact Support Desk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  About Streamora Platform
                </button>
              </li>
              <li>
                <a
                  href={getWhatsAppLink('Hello Streamora! I need assistance with my subscription.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF92A] transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp Desk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3">Legal & Security</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('refund')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  Refund Policy (30 Days)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dmca')} className="hover:text-[#FAF92A] transition-colors cursor-pointer">
                  DMCA & Authorized Distribution
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Streamora. All rights reserved. Premium IPTV & Live Streaming Service.</p>
          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FAF92A]" />
            <span>Authorized distribution & encrypted transport infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
