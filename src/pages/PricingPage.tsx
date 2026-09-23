import React, { useState } from 'react';
import {
  CheckCircle2,
  Zap,
  MessageSquare,
  ShieldCheck,
  Flame,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getPricingWhatsAppLink, getFreeTrialWhatsAppLink, getWhatsAppLink } from '../utils/whatsapp';

interface PricingPageProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onSelectPlan,
  onOpenFreeTrial,
  onNavigate,
}) => {
  const [selectedConnections, setSelectedConnections] = useState<number>(1);

  // Calculate dynamic price based on connections
  const getConnectionAdjustedPrice = (plan: PricingPlan) => {
    if (selectedConnections === 1) return plan.price;
    const extraConnections = selectedConnections - 1;
    return Number((plan.price * (1 + extraConnections * 0.45)).toFixed(2));
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <Flame className="w-3.5 h-3.5 fill-[#FAF92A]" />
          <span>Transparent Pricing · No Hidden Fees · Instant WhatsApp Line</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Flexible Plans for Every Screen
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Choose your subscription duration and device count. All packages include over 20,000+ 4K live channels, 80,000+ movies & series, anti-freeze buffering protection, and 24/7 VIP WhatsApp support.
        </p>

        {/* Free Trial Callout */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={onOpenFreeTrial}
            className="px-4 py-2 bg-[#FAF92A]/20 hover:bg-[#FAF92A]/30 text-[#FAF92A] border border-[#FAF92A]/40 font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Zap className="w-3.5 h-3.5 fill-[#FAF92A]" />
            <span>Not sure yet? Try 24-Hour Free Trial first</span>
          </button>
        </div>
      </div>

      {/* Connection Count Switcher */}
      <div className="max-w-md mx-auto bg-[#121215] border border-white/10 rounded-2xl p-2">
        <div className="text-center text-xs text-neutral-400 mb-2 font-medium">
          Choose Concurrent Connected Devices:
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[1, 2, 3, 4].map((count) => (
            <button
              key={count}
              onClick={() => setSelectedConnections(count)}
              className={`py-2 px-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedConnections === count
                  ? 'bg-[#FAF92A] text-black shadow-md'
                  : 'bg-white/5 text-neutral-300 hover:text-white'
              }`}
            >
              {count} {count === 1 ? 'Device' : 'Devices'}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.isPopular;
          const adjustedPrice = getConnectionAdjustedPrice(plan);
          const adjustedMonthly = (adjustedPrice / plan.durationMonths).toFixed(2);

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                isPopular
                  ? 'bg-[#18181D] border-2 border-[#FAF92A] shadow-[0_0_35px_rgba(250,249,42,0.25)] lg:-translate-y-3'
                  : 'bg-[#121215] border border-white/10 hover:border-[#FDBF2D]/50'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 bg-[#FAF92A] text-black font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-black text-white">{plan.name}</h3>
                <p className="text-xs text-neutral-400 mt-1 min-h-[30px]">{plan.recommendedFor}</p>

                {/* Price Display */}
                <div className="mt-4 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#FAF92A] font-mono tabular-nums">
                      ${adjustedPrice}
                    </span>
                    <span className="text-xs text-neutral-400">
                      / {plan.durationMonths === 1 ? 'month' : `${plan.durationMonths} mos`}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-[#FAF92A] font-semibold">
                      (${adjustedMonthly}/mo)
                    </span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-[11px] text-neutral-400">
                      {selectedConnections} Screen{selectedConnections > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 text-xs text-neutral-300 pb-6 border-t border-white/10 pt-4">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FAF92A] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: WhatsApp on EVERY Plan + Online + Free Trial */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                {/* 1. WhatsApp Button on EVERY Plan */}
                <a
                  href={getPricingWhatsAppLink(plan.name, adjustedPrice, selectedConnections)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95"
                  title={`Order ${plan.name} directly on WhatsApp`}
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Order via WhatsApp</span>
                </a>

                {/* 2. Online Card / Gateway Checkout */}
                <button
                  onClick={() => onSelectPlan({ ...plan, price: adjustedPrice, connections: selectedConnections })}
                  className="w-full py-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/15 transition-colors cursor-pointer"
                >
                  Pay Online / Card
                </button>

                {/* 3. Free Trial Button on EVERY Plan */}
                <button
                  onClick={onOpenFreeTrial}
                  className="w-full py-1.5 text-center text-[11px] text-neutral-400 hover:text-[#FAF92A] transition-colors cursor-pointer flex items-center justify-center gap-1 font-medium"
                >
                  <Zap className="w-3 h-3 text-[#FAF92A] fill-[#FAF92A]" />
                  <span>Request Free Trial First</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison Matrix */}
      <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-x-auto">
        <h3 className="text-xl font-extrabold text-white mb-6">
          Detailed Package Comparison
        </h3>

        <table className="w-full text-xs text-left">
          <thead>
            <tr className="border-b border-white/10 text-neutral-400">
              <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Feature</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">1 Month</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">3 Months</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">6 Months</th>
              <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] text-[#FAF92A]">12 Months VIP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-neutral-300">
            <tr>
              <td className="py-3 px-4 font-medium text-white">4K & FHD Live Channels</td>
              <td className="py-3 px-4 font-mono">20,000+</td>
              <td className="py-3 px-4 font-mono">20,000+</td>
              <td className="py-3 px-4 font-mono">20,000+</td>
              <td className="py-3 px-4 font-mono text-[#FAF92A] font-bold">20,000+ Full VIP</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-white">VOD Movies & Series</td>
              <td className="py-3 px-4 font-mono">80,000+</td>
              <td className="py-3 px-4 font-mono">80,000+</td>
              <td className="py-3 px-4 font-mono">80,000+</td>
              <td className="py-3 px-4 font-mono text-[#FAF92A] font-bold">80,000+ 4K HDR</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-white">Anti-Freeze 9.4 Engine</td>
              <td className="py-3 px-4">Standard</td>
              <td className="py-3 px-4">Standard</td>
              <td className="py-3 px-4 font-semibold text-white">High Priority</td>
              <td className="py-3 px-4 text-[#FAF92A] font-bold">Ultra Dedicated CDN</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-white">7-Day EPG TV Guide</td>
              <td className="py-3 px-4">Included</td>
              <td className="py-3 px-4">Included</td>
              <td className="py-3 px-4">Included</td>
              <td className="py-3 px-4 text-[#FAF92A] font-bold">Included + Catch-Up</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-white">WhatsApp VIP Support</td>
              <td className="py-3 px-4">24/7 Standard</td>
              <td className="py-3 px-4">24/7 Priority</td>
              <td className="py-3 px-4">Dedicated Desk</td>
              <td className="py-3 px-4 text-[#FAF92A] font-bold">VIP Concierge & Remote Setup</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-white">Satisfaction Guarantee</td>
              <td className="py-3 px-4">7 Days</td>
              <td className="py-3 px-4">7 Days</td>
              <td className="py-3 px-4">14 Days</td>
              <td className="py-3 px-4 text-[#FAF92A] font-bold">30 Days Full Guarantee</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121215] via-[#18181D] to-[#121215] border border-[#FAF92A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF92A]/15 border border-[#FAF92A]/30 flex items-center justify-center text-[#FAF92A] shrink-0">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-lg">
              We stand 100% behind our bufferless streaming quality. If our service does not perform flawlessly on your devices, contact our WhatsApp desk for a fast, hassle-free refund.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenFreeTrial}
            className="px-5 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>Claim Free Trial</span>
          </button>
        </div>
      </div>
    </div>
  );
};
