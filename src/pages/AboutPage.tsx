import React from 'react';
import { ShieldCheck, Tv, Server, Globe2, Users2, MessageSquare, Zap, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';

interface AboutPageProps {
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenFreeTrial, onNavigate }) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>The Next Generation of Television</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About Streamora
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Founded to solve the frustrations of traditional cable contracts and unreliable pirate resellers, Streamora delivers an enterprise-grade, authorized streaming platform optimized for pristine visual fidelity and seamless multi-device viewing.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#121215] border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF92A]/15 border border-[#FAF92A]/30 flex items-center justify-center text-[#FAF92A]">
            <Server className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Ultra-Low Latency CDN</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Our video distribution fabric relies on over 120 dedicated edge locations worldwide, peering directly with tier-1 internet backbones to minimize jitter and completely eliminate buffering.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#121215] border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF92A]/15 border border-[#FAF92A]/30 flex items-center justify-center text-[#FAF92A]">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Authorized Delivery Model</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Streamora strictly complies with regional broadcast licenses and authorized retransmission standards, providing subscribers with safe, encrypted, uninterrupted service without regulatory risk.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#121215] border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF92A]/15 border border-[#FAF92A]/30 flex items-center justify-center text-[#FAF92A]">
            <Users2 className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h3 className="text-lg font-extrabold text-white">Direct Human Support</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Unlike anonymous reseller sites, we pride ourselves on real human relationship management through our dedicated 24/7 WhatsApp customer care desk.
          </p>
        </div>
      </div>

      {/* Compliance & Engineering Philosophy */}
      <div className="rounded-3xl bg-[#121215] border border-[#FAF92A]/30 p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-black text-white">
          Our Commitment to Quality and Compliance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-300 leading-relaxed">
          <p>
            Streamora was architected by media broadcast engineers and software developers with over 15 years of telecommunications experience. We recognized that the modern television consumer does not want complicated satellite dishes, annual binding contracts, or poor-quality streams that crash during major sporting finals.
          </p>
          <p>
            By leveraging contemporary containerized cloud workloads, intelligent dynamic bitrate transcoding (H.265/HEVC), and end-to-end TLS 1.3 transport security, Streamora offers an experience that rival global streaming giants while maintaining ultra-accessible consumer pricing.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
            <span>24/7 Monitoring · 99.9% Core Service Reliability</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFreeTrial}
              className="px-5 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Test Free Trial</span>
            </button>
            <a
              href={getWhatsAppLink('Hello Streamora! I would like to learn more about your platform.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/15 flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
