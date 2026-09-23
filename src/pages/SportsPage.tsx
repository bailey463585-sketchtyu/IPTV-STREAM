import React, { useState } from 'react';
import { Activity, Play, Zap, MessageSquare, ChevronRight, Calendar } from 'lucide-react';
import { SPORTS_EVENTS } from '../data/mockData';
import { WHATSAPP_PHONE_RAW, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface SportsPageProps {
  onWatchStream: (title: string, category: string, quality: string) => void;
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const SportsPage: React.FC<SportsPageProps> = ({
  onWatchStream,
  onOpenFreeTrial,
  onNavigate,
}) => {
  const [selectedSport, setSelectedSport] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Live' | 'Upcoming' | 'Finished'>('All');

  const sports = ['All', 'Football', 'Motorsports', 'Basketball', 'Tennis', 'Cricket'];

  const filteredEvents = SPORTS_EVENTS.filter((e) => {
    const matchSport = selectedSport === 'All' || e.sport === selectedSport;
    const matchStatus = selectedStatus === 'All' || e.status === selectedStatus;
    return matchSport && matchStatus;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Hero Visual Card */}
      <div className="relative rounded-3xl overflow-hidden border border-[#FAF92A]/30 bg-[#121215]">
        <div className="relative h-72 sm:h-96 w-full">
          <img
            src="/src/assets/images/sports_championship_live_1790145370236.jpg"
            alt="Live 4K Ultra HD Sports Stadium Broadcast"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF92A]/15 border border-[#FAF92A]/40 text-[#FAF92A] text-xs font-bold">
                <Activity className="w-3.5 h-3.5" />
                <span>Zero Latency Live Sports Hub</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Never Miss the Action
              </h1>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                Experience all major football leagues, championship tennis, basketball finals, and high-speed motorsport events in uncompressed 4K 60FPS.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenFreeTrial}
                className="px-5 py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Test Match Free Trial</span>
              </button>
              <a
                href={getFreeTrialWhatsAppLink('Sports Package Special')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/15 flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#FAF92A]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#121215] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Sports filter */}
        <div className="flex flex-wrap gap-1.5">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedSport === sport
                  ? 'bg-[#FAF92A] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 text-xs">
          {(['All', 'Live', 'Upcoming', 'Finished'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                selectedStatus === st
                  ? 'bg-[#FAF92A] text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => {
          const isLive = evt.status === 'Live';
          return (
            <div
              key={evt.id}
              className={`p-6 rounded-2xl bg-[#121215] border transition-all flex flex-col justify-between ${
                isLive
                  ? 'border-[#FAF92A]/50 shadow-[0_0_20px_rgba(250,249,42,0.15)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[#FAF92A] font-bold uppercase tracking-wider text-[11px]">
                    {evt.sport} · {evt.tournament}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isLive ? 'bg-red-500/20 text-red-400 flex items-center gap-1' : 'bg-white/10 text-neutral-300'
                  }`}>
                    {isLive && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />}
                    {isLive ? `LIVE (${evt.time})` : evt.time}
                  </span>
                </div>

                {/* Match title */}
                <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                  {evt.match}
                </h3>

                {/* Score & Venue */}
                <div className="bg-black/30 rounded-xl p-3 border border-white/5 space-y-1 mb-4 text-xs font-mono">
                  {evt.score ? (
                    <div className="flex items-center justify-between text-white">
                      <span className="text-neutral-400 font-sans">Current Score:</span>
                      <span className="text-lg font-black text-[#FAF92A]">{evt.score}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Calendar className="w-3.5 h-3.5 text-[#FAF92A]" />
                      <span>Scheduled Broadcast Event</span>
                    </div>
                  )}
                  {evt.stadium && (
                    <p className="text-[11px] text-neutral-500 font-sans">Stadium: {evt.stadium}</p>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 block font-mono">{evt.channelName}</span>
                  <span className="text-[10px] text-[#FAF92A] font-semibold">{evt.streamQuality}</span>
                </div>

                <button
                  onClick={() => onWatchStream(evt.match, evt.sport, evt.streamQuality)}
                  className="px-3.5 py-1.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Watch Stream</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
