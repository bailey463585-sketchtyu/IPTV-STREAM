import React, { useState } from 'react';
import {
  Zap,
  Tv,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Play,
  Flame,
  ArrowRight,
  Search,
  ExternalLink,
  Star,
  Monitor,
  Smartphone,
  Laptop
} from 'lucide-react';
import { PRICING_PLANS, CHANNELS_DATA, SPORTS_EVENTS, MOVIES_DATA, FAQS_DATA, TESTIMONIALS_DATA } from '../data/mockData';
import { PricingPlan } from '../types';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink, getPricingWhatsAppLink, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenFreeTrial: () => void;
  onSelectPlan: (plan: PricingPlan) => void;
  onWatchStream: (title: string, category: string, quality: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenFreeTrial,
  onSelectPlan,
  onWatchStream,
}) => {
  const [activeChannelCat, setActiveChannelCat] = useState<'All' | 'Sports' | 'News' | 'Cinema' | 'Documentary'>('All');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const filteredChannels = activeChannelCat === 'All'
    ? CHANNELS_DATA.slice(0, 6)
    : CHANNELS_DATA.filter(c => c.category === activeChannelCat).slice(0, 6);

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-40 lg:pt-44 overflow-hidden">
        {/* Subtle Ambient Glows - Strict Brand Yellow/Amber Only */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#FAF92A]/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FAF92A]/30 text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-[#FAF92A] animate-pulse" />
                <span>Next-Gen 4K IPTV Service · Anti-Freeze 9.4</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Your Entertainment.{' '}
                <span className="text-[#FAF92A]">One Powerful</span> Streaming Experience.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Stream live TV, sports, entertainment and more across your favorite devices with a simple and reliable viewing experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-3.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-sm rounded-xl transition-all shadow-[0_0_25px_rgba(250,249,42,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>View Plans</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={onOpenFreeTrial}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold text-sm rounded-xl border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-[#FAF92A] fill-[#FAF92A]" />
                  <span>Start 24H Free Trial</span>
                </button>

                <a
                  href={getWhatsAppLink('Hello Streamora! I would like to inquire about IPTV subscriptions and free trial.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/5 hover:bg-[#FAF92A]/10 text-neutral-200 hover:text-white font-semibold text-xs rounded-xl border border-white/10 hover:border-[#FAF92A]/40 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#FAF92A]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-400 font-medium">
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#FAF92A] shrink-0" />
                  <span>Fast Setup</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#FAF92A] shrink-0" />
                  <span>Multi-Device</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#FAF92A] shrink-0" />
                  <span>Secure Access</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#FAF92A] shrink-0" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Side: Cinematic Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden border border-[#FAF92A]/30 shadow-2xl bg-[#121215] group">
                <img
                  src="/src/assets/images/hero_tv_interface_1790145356029.jpg"
                  alt="Streamora IPTV Dashboard UI displayed on a modern 4K OLED Smart TV"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Live Channel Quick Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0A0A0C]/85 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF92A]/15 border border-[#FAF92A]/40 flex items-center justify-center text-[#FAF92A]">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold text-white">Prime Sports Ultra 4K</span>
                      </div>
                      <p className="text-[11px] text-neutral-400">Premier Champions Final · 19.4 Mbps</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onWatchStream('Prime Sports Ultra 4K', 'Sports', '4K UHD')}
                    className="px-3 py-1.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-lg flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
                  >
                    <Play className="w-3 h-3 fill-black" />
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & STATS SECTION */}
      <section className="border-y border-white/10 bg-white/[0.02] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FAF92A] mb-1">
              Performance & Reach
            </h2>
            <p className="text-xl sm:text-2xl font-extrabold text-white">
              Built for a Better Streaming Experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-[#FAF92A] font-mono tabular-nums">10K+</div>
              <p className="text-xs text-neutral-400 mt-1 font-medium">Active Users</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-[#FAF92A] font-mono tabular-nums">100+</div>
              <p className="text-xs text-neutral-400 mt-1 font-medium">Compatible Devices</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-[#FAF92A] font-mono tabular-nums">99%</div>
              <p className="text-xs text-neutral-400 mt-1 font-medium">Customer Satisfaction</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-[#FAF92A] font-mono tabular-nums">24/7</div>
              <p className="text-xs text-neutral-400 mt-1 font-medium">WhatsApp Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIVE TV SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FAF92A] mb-1">
              Live Television Grid
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              20,000+ Channels Across All Categories
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Crystal-clear 4K UHD and FHD 60FPS streaming with interactive electronic program guide.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
            {(['All', 'Sports', 'News', 'Cinema', 'Documentary'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveChannelCat(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeChannelCat === cat
                    ? 'bg-[#FAF92A] text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="p-5 rounded-2xl bg-[#121215] border border-white/10 hover:border-[#FAF92A]/40 transition-all group relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF92A] font-bold group-hover:bg-[#FAF92A]/10 transition-colors">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FAF92A] transition-colors">
                      {channel.name}
                    </h4>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      {channel.category} · {channel.language}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAF92A]/15 text-[#FAF92A] border border-[#FAF92A]/30">
                  {channel.quality}
                </span>
              </div>

              {/* Show Program Info */}
              <div className="bg-black/30 rounded-xl p-3 border border-white/5 space-y-1 mb-4 text-xs">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">Now Airing:</span>
                  <span className="flex items-center gap-1 text-[10px] text-[#FAF92A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAF92A] animate-ping" />
                    LIVE
                  </span>
                </div>
                <p className="font-semibold text-white truncate">{channel.currentShow}</p>
                <p className="text-[11px] text-neutral-500 truncate">Next: {channel.nextShow}</p>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-neutral-400 font-mono">
                  {channel.bitrate} · Buffer 0ms
                </span>
                <button
                  onClick={() => onWatchStream(channel.name, channel.category, channel.quality)}
                  className="px-3 py-1.5 bg-white/10 hover:bg-[#FAF92A] hover:text-black text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('channels')}
            className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 inline-flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>Explore All 20,000+ Channels</span>
            <ArrowRight className="w-4 h-4 text-[#FAF92A]" />
          </button>
        </div>
      </section>

      {/* 4. SPORTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#FAF92A]/30 bg-[#121215]">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/src/assets/images/sports_streaming_match_1790143885972.jpg"
              alt="High stakes stadium football and motorsport broadcasting"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAF92A] mb-1 block">
                  Stadium Atmosphere at Home
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Never Miss the Action
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
                  Catch every goal, race lap, and championship match in uncompressed 4K 60FPS with zero buffering.
                </p>
              </div>

              <button
                onClick={() => onNavigate('sports')}
                className="px-5 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl transition-all self-start sm:self-auto cursor-pointer"
              >
                View Sports Schedule
              </button>
            </div>
          </div>

          {/* Sports Match Cards preview */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {SPORTS_EVENTS.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="text-[#FAF92A] font-bold">{event.tournament}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      event.status === 'Live' ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-neutral-300'
                    }`}>
                      {event.status === 'Live' ? `LIVE (${event.time})` : event.time}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{event.match}</h4>
                  {event.score && (
                    <p className="text-lg font-mono font-black text-[#FAF92A] mb-1">{event.score}</p>
                  )}
                  <p className="text-[11px] text-neutral-400">{event.stadium}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400 font-mono">{event.channelName}</span>
                  <button
                    onClick={() => onWatchStream(event.match, event.sport, event.streamQuality)}
                    className="text-xs text-[#FAF92A] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Watch Stream</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-[#FAF92A] text-xs font-bold mb-3">
            <Flame className="w-3.5 h-3.5 fill-[#FAF92A]" />
            <span>Best Market Pricing · Instant Activation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Streaming Plan
          </h2>
          <p className="text-sm text-neutral-300 mt-2">
            All plans include over 20,000+ live channels, 80,000+ movies, 4K sports, and instant 24/7 VIP WhatsApp support.
          </p>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#18181D] border-2 border-[#FAF92A] shadow-[0_0_35px_rgba(250,249,42,0.2)] lg:-translate-y-2'
                    : 'bg-[#121215] border border-white/10 hover:border-[#FDBF2D]/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[#FAF92A] text-black font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-extrabold text-white">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 min-h-[32px]">{plan.recommendedFor}</p>

                  <div className="mt-4 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#FAF92A] font-mono tabular-nums">
                        ${plan.price}
                      </span>
                      <span className="text-xs text-neutral-400">
                        / {plan.durationMonths === 1 ? 'month' : `${plan.durationMonths} mos`}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-400 line-through">
                      Was ${plan.originalPrice}
                    </span>
                    <span className="text-[11px] text-[#FAF92A] ml-2 font-semibold">
                      (${plan.monthlyEquivalent.toFixed(2)}/mo)
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 text-xs text-neutral-300 pb-6 border-t border-white/10 pt-4">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FAF92A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons (Direct WhatsApp + Checkout + Free Trial) */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {/* WhatsApp Order Button */}
                  <a
                    href={getPricingWhatsAppLink(plan.name, plan.price, plan.connections)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                    title={`Order ${plan.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 fill-black" />
                    <span>Order via WhatsApp</span>
                  </a>

                  {/* Online Checkout Button */}
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/15 transition-colors cursor-pointer"
                  >
                    Pay Online / Card
                  </button>

                  {/* Free Trial Button */}
                  <button
                    onClick={onOpenFreeTrial}
                    className="w-full text-center text-[11px] text-neutral-400 hover:text-[#FAF92A] transition-colors py-1 cursor-pointer font-medium"
                  >
                    Or claim 24h Free Trial first →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. HOW IT WORKS (3-Step Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FAF92A] mb-1">
            Simple Activation
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            How It Works in 3 Easy Steps
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 relative">
            <span className="text-4xl font-mono font-black text-[#FAF92A]/40 block mb-3">01</span>
            <h4 className="text-base font-extrabold text-white mb-2">Choose Your Plan</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Select between our 1, 3, 6, or 12-month packages, or start with our zero-risk 24-hour free trial.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 relative">
            <span className="text-4xl font-mono font-black text-[#FAF92A]/40 block mb-3">02</span>
            <h4 className="text-base font-extrabold text-white mb-2">Receive Credentials</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get your high-speed M3U playlist URL and Xtream Codes credentials instantly on WhatsApp or email.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 relative">
            <span className="text-4xl font-mono font-black text-[#FAF92A]/40 block mb-3">03</span>
            <h4 className="text-base font-extrabold text-white mb-2">Start Streaming</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Input the credentials into your Smart TV, Firestick, or phone and immediately access 20,000+ 4K channels.
            </p>
          </div>
        </div>
      </section>

      {/* 7. DEVICE COMPATIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121215] border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FAF92A]">
              Ecosystem Freedom
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Watch on Your Favorite Devices
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Streamora is architected to operate natively across all modern operating systems without proprietary hardware. Install your preferred IPTV client and connect in under 3 minutes.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
                <span>Samsung & LG Smart TV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
                <span>Amazon Firestick & Fire TV</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
                <span>Android TV & Nvidia Shield</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
                <span>Apple TV 4K, iPhone & iPad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
                <span>Windows PC & Mac OS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FAF92A]" />
                <span>MAG & Formuler Boxes</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('devices')}
                className="px-5 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Read Device Setup Guides</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#FAF92A]/30 shadow-2xl">
              <img
                src="/src/assets/images/devices_streaming_ecosystem_1790145399144.jpg"
                alt="Multi-device IPTV ecosystem showing TV, laptop, phone and tablet"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FAF92A] mb-1">
            Customer Feedback
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Trusted by Streamers Worldwide
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#FAF92A] mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FAF92A]" />
                  ))}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-white/5 pt-3">
                <h4 className="text-xs font-bold text-white">{t.name}</h4>
                <p className="text-[11px] text-neutral-400">{t.role} · {t.country}</p>
                <span className="text-[10px] text-[#FAF92A] font-semibold mt-1 block">
                  Verified Plan: {t.plan}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION TEASER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#FAF92A] mb-1">
            Got Questions?
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.slice(0, 5).map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#121215] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-bold text-white">{faq.question}</span>
                  <ChevronRight className={`w-4 h-4 text-[#FAF92A] shrink-0 transition-transform ${
                    isOpen ? 'rotate-90' : ''
                  }`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('faq')}
            className="text-xs text-[#FAF92A] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Read full FAQ knowledge base</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#121215] via-[#18181D] to-[#121215] border-2 border-[#FAF92A]/50 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF92A]/15 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
              24/7 Fast Setup · Instant WhatsApp Line
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
              Ready to Upgrade Your Streaming Experience?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
              Choose a plan and start enjoying a simple, modern streaming experience across your supported devices.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-sm rounded-xl transition-all shadow-[0_0_25px_rgba(250,249,42,0.3)] cursor-pointer"
              >
                View Plans
              </button>

              <button
                onClick={onOpenFreeTrial}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold text-sm rounded-xl border border-white/15 transition-all cursor-pointer"
              >
                Start Free Trial
              </button>

              <a
                href={getWhatsAppLink('Hello Streamora! I want to start my IPTV subscription on WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#FAF92A]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
