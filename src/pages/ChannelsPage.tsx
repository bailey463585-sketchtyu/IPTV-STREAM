import React, { useState } from 'react';
import { Search, Tv, Play, Star, Zap, MessageSquare, Filter } from 'lucide-react';
import { CHANNELS_DATA } from '../data/mockData';
import { Channel } from '../types';
import { WHATSAPP_PHONE_RAW, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface ChannelsPageProps {
  onWatchStream: (title: string, category: string, quality: string) => void;
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const ChannelsPage: React.FC<ChannelsPageProps> = ({
  onWatchStream,
  onOpenFreeTrial,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [favorites, setFavorites] = useState<string[]>(['ch-1', 'ch-4']);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const categories = ['All', 'Sports', 'News', 'Cinema', 'Documentary', 'Entertainment', 'Kids', 'International'];

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const filteredChannels = CHANNELS_DATA.filter((c) => {
    const matchesCat = selectedCat === 'All' || c.category === selectedCat;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.currentShow.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFav = onlyFavorites ? favorites.includes(c.id) : true;
    return matchesCat && matchesSearch && matchesFav;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-semibold text-[#FAF92A]">
          <Tv className="w-3.5 h-3.5" />
          <span>Interactive Live Electronic Program Guide</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          20,000+ Premium Live Channels
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300">
          Stream live television in 4K UHD and FHD 60FPS. Fast zapping with zero delay and 7-day electronic program guide.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-[#121215] border border-white/10 rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search channel name, airing show, sport..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A]"
            />
          </div>

          {/* Favorites Filter Button */}
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
              onlyFavorites
                ? 'bg-[#FAF92A] text-black border-[#FAF92A]'
                : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
            }`}
          >
            <Star className={`w-4 h-4 ${onlyFavorites ? 'fill-black' : 'text-neutral-400'}`} />
            <span>Favorites ({favorites.length})</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#FAF92A] text-black shadow-sm'
                  : 'text-neutral-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Channel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChannels.map((channel) => {
          const isFav = favorites.includes(channel.id);
          return (
            <div
              key={channel.id}
              className="p-5 rounded-2xl bg-[#121215] border border-white/10 hover:border-[#FAF92A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF92A] font-bold">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#FAF92A] transition-colors">
                        {channel.name}
                      </h3>
                      <p className="text-[11px] text-neutral-400">
                        {channel.category} · {channel.language}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleFavorite(channel.id)}
                      className="p-1.5 text-neutral-400 hover:text-[#FAF92A] cursor-pointer"
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Star className={`w-4 h-4 ${isFav ? 'text-[#FAF92A] fill-[#FAF92A]' : ''}`} />
                    </button>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAF92A]/15 text-[#FAF92A] border border-[#FAF92A]/30">
                      {channel.quality}
                    </span>
                  </div>
                </div>

                {/* EPG Program Box */}
                <div className="bg-black/30 rounded-xl p-3 border border-white/5 space-y-1 mb-4 text-xs">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Now Playing:</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#FAF92A] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FAF92A] animate-ping" />
                      LIVE
                    </span>
                  </div>
                  <p className="font-semibold text-white truncate">{channel.currentShow}</p>
                  <p className="text-[11px] text-neutral-500 truncate">Up Next: {channel.nextShow}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-[11px] text-neutral-400 font-mono">
                  {channel.bitrate} · {channel.viewers.toLocaleString()} watching
                </span>

                <button
                  onClick={() => onWatchStream(channel.name, channel.category, channel.quality)}
                  className="px-3 py-1.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Play className="w-3 h-3 fill-black" />
                  <span>Preview Stream</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredChannels.length === 0 && (
        <div className="text-center py-16 bg-[#121215] rounded-2xl border border-white/10">
          <Tv className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No channels found</h3>
          <p className="text-xs text-neutral-400 mt-1">Try searching for a different keyword or category.</p>
        </div>
      )}

      {/* Floating Activation Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF92A]/10 via-[#18181D] to-[#FDBF2D]/10 border border-[#FAF92A]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">
            Want All 20,000+ Channels on Your Smart TV or Firestick?
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            Test our service risk-free with a 24-hour trial or order immediately via WhatsApp.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenFreeTrial}
            className="px-4 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>24h Free Trial</span>
          </button>
          <a
            href={getFreeTrialWhatsAppLink('All Channels Package')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
