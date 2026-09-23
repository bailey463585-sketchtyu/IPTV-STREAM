import React, { useState } from 'react';
import {
  Tv,
  Monitor,
  Smartphone,
  Laptop,
  CheckCircle2,
  Zap,
  MessageSquare,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { DEVICE_GUIDES } from '../data/mockData';
import { WHATSAPP_PHONE_RAW, getDeviceSetupWhatsAppLink, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface DevicesPageProps {
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const DevicesPage: React.FC<DevicesPageProps> = ({ onOpenFreeTrial, onNavigate }) => {
  const [selectedDevice, setSelectedDevice] = useState<string>(DEVICE_GUIDES[0].id);

  const activeGuide = DEVICE_GUIDES.find(d => d.id === selectedDevice) || DEVICE_GUIDES[0];

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <Tv className="w-3.5 h-3.5" />
          <span>Universal Cross-Platform Compatibility</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Watch on Your Favorite Devices
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Streamora connects seamlessly with virtually any screen in your home. No bulky satellite dishes or complicated contracts—just download your favorite app and enter your credentials.
        </p>
      </div>

      {/* Visual Showcase Card */}
      <div className="relative rounded-3xl overflow-hidden border border-[#FAF92A]/30 shadow-2xl max-w-5xl mx-auto group">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#121215]">
          <img
            src="/src/assets/images/devices_streaming_ecosystem_1790145399144.jpg"
            alt="Multi-device IPTV streaming lineup across Smart TV, tablets, phones and remotes"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF92A] font-bold">
                1 Account · Multi-Screen Synchronized
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white drop-shadow">
                Seamless Playback Across Every Screen
              </h2>
            </div>
            <button
              onClick={onOpenFreeTrial}
              className="hidden sm:flex px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Test on Your Device</span>
            </button>
          </div>
        </div>
      </div>

      {/* Device Picker Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {DEVICE_GUIDES.map((dev) => {
          const isSelected = selectedDevice === dev.id;
          return (
            <button
              key={dev.id}
              onClick={() => setSelectedDevice(dev.id)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#FAF92A] text-black border-[#FAF92A] shadow-md'
                  : 'bg-[#121215] border-white/10 text-neutral-300 hover:border-white/20'
              }`}
            >
              <span>{dev.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Guide Card */}
      <div className="bg-[#121215] border border-[#FAF92A]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-black text-white">{activeGuide.name} Setup Guide</h2>
              <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300 flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#FAF92A]" />
                {activeGuide.setupTime}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#FAF92A]/15 text-[11px] font-semibold text-[#FAF92A]">
                {activeGuide.difficulty}
              </span>
            </div>

            {/* Compatible Applications */}
            <div>
              <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider block mb-2">
                Recommended Apps for this Device:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeGuide.compatibleApps.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs text-white font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[11px] text-[#FAF92A]">
                Installation Steps:
              </h3>
              <div className="space-y-3">
                {activeGuide.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-6 h-6 rounded-lg bg-[#FAF92A] text-black font-extrabold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-neutral-200 leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-6 space-y-5">
            <h3 className="text-base font-extrabold text-white">
              Get Setup Assistance on WhatsApp
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Don't want to configure it yourself? Message our 24/7 technical team on WhatsApp. We'll send direct download links and test credentials in seconds.
            </p>

            <div className="space-y-2.5 pt-2">
              <a
                href={getDeviceSetupWhatsAppLink(activeGuide.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Chat for {activeGuide.name} Setup</span>
              </a>

              <button
                onClick={onOpenFreeTrial}
                className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Zap className="w-4 h-4 text-[#FAF92A] fill-[#FAF92A]" />
                <span>Request 24h Free Trial</span>
              </button>

              <button
                onClick={() => onNavigate('pricing')}
                className="w-full py-2 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                Or view all subscription plans →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
