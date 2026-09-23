import React from 'react';
import {
  Tv,
  Activity,
  Film,
  Calendar,
  Layers,
  Star,
  Search,
  Lock,
  Cpu,
  ShieldCheck,
  MessageSquare,
  Zap,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface FeaturesPageProps {
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onOpenFreeTrial, onNavigate }) => {
  const features = [
    {
      icon: Tv,
      title: '20,000+ Live Channels',
      desc: 'Access global broadcasts in crystal-clear 4K UHD and FHD 60FPS across sports, news, cinema, and international feeds with zero down-time.',
    },
    {
      icon: Activity,
      title: 'Dedicated Sports Streaming',
      desc: 'Never miss marquee matches, UFC fights, Grand Prix races, or tournament finals with specialized high-bandwidth server clusters.',
    },
    {
      icon: Film,
      title: '80,000+ VOD Cinema & Series',
      desc: 'Massive on-demand library featuring blockbuster films, binge-worthy series, and documentaries in 4K HDR with Dolby Atmos sound.',
    },
    {
      icon: Calendar,
      title: 'Electronic Program Guide (EPG)',
      desc: 'Full 7-day TV timetable with catch-up playback, allowing you to rewind past live shows and schedule viewing ahead of time.',
    },
    {
      icon: Layers,
      title: 'Multi-Device Support',
      desc: 'Stream simultaneously across Samsung/LG Smart TVs, Amazon Firesticks, Android TV boxes, Apple TV, iPhone, iPad, and PC/Mac.',
    },
    {
      icon: Star,
      title: 'Favorites & Custom Playlists',
      desc: 'Pin your most-watched channels, create customized bouquets, and enjoy personalized recommendations matching your household tastes.',
    },
    {
      icon: Search,
      title: 'Instant Search & Fast Zapping',
      desc: 'Switch between live channels in under 1.2 seconds thanks to localized edge CDN caching and optimized HLS video players.',
    },
    {
      icon: Lock,
      title: 'Parental Controls & PIN Protection',
      desc: 'Lock adult or mature content bouquets with a secure 4-digit PIN to ensure family-safe streaming for children.',
    },
    {
      icon: Cpu,
      title: 'Anti-Freeze 9.4 Adaptive Bitrate',
      desc: 'Our proprietary CDN engine dynamically balances buffer chunks, preventing stutters and lag even during peak internet hours.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Xtream Codes & M3U',
      desc: 'Enterprise-grade encryption and unique API keys ensure your subscription is protected against unauthorized access.',
    },
    {
      icon: MessageSquare,
      title: '24/7 VIP WhatsApp Desk',
      desc: 'Real human engineering assistance ready 24 hours a day on WhatsApp for device setups, playlist reloads, and troubleshooting.',
    },
    {
      icon: Clock,
      title: '3-Minute Instant Setup',
      desc: 'No technical knowledge needed. Download the recommended player app, input your credentials, and start streaming immediately.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Streaming Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Everything You Need for Seamless Streaming
        </h1>
        <p className="text-sm text-neutral-300 leading-relaxed">
          Streamora merges carrier-grade streaming infrastructure with an intuitive user experience. Built from the ground up for high reliability, zero buffering, and multi-device freedom.
        </p>
      </div>

      {/* 12 Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121215] border border-white/10 hover:border-[#FAF92A]/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF92A] mb-4 group-hover:bg-[#FAF92A]/10 group-hover:border-[#FAF92A]/40 transition-colors">
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-[#FAF92A] transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Tech Banner */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#121215] via-[#18181D] to-[#121215] border border-[#FAF92A]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FAF92A]">
              Under The Hood: Anti-Freeze 9.4 Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Streamora Stays Bufferless While Others Fail
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              During major sporting finals, cheap IPTV resellers crumble under high viewer traffic because they depend on single VPS servers. Streamora deploys an interconnected network of 120+ edge CDN locations worldwide with automated load-balancing, guaranteeing maximum uptime and uninterrupted 60FPS playback.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-neutral-300">
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                ⚡ 120+ Global Edge Nodes
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                🔒 TLS 1.3 End-to-End Stream Encrypted
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                📡 10 Gbps Uplinks Per Cluster
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onNavigate('pricing')}
              className="w-full py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
            >
              <span>View Pricing Packages</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onOpenFreeTrial}
              className="w-full py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Zap className="w-4 h-4 text-[#FAF92A] fill-[#FAF92A]" />
              <span>Claim 24-Hour Free Trial</span>
            </button>

            <a
              href={getWhatsAppLink('Hello Streamora! I want to ask about your Anti-Freeze technology on WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-center text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer border border-white/5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
