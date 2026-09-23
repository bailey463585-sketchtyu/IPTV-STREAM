import React, { useState } from 'react';
import { Film, Play, Star, Clock, Zap, MessageSquare, Sparkles } from 'lucide-react';
import { MOVIES_DATA } from '../data/mockData';
import { WHATSAPP_PHONE_RAW, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface EntertainmentPageProps {
  onWatchStream: (title: string, category: string, quality: string) => void;
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const EntertainmentPage: React.FC<EntertainmentPageProps> = ({
  onWatchStream,
  onOpenFreeTrial,
  onNavigate,
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const genres = ['All', 'Sci-Fi', 'Action', 'Documentary', 'Motorsport', 'Drama'];

  const filteredMovies = selectedGenre === 'All'
    ? MOVIES_DATA
    : MOVIES_DATA.filter(m => m.genre.toLowerCase().includes(selectedGenre.toLowerCase()));

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero Visual Card */}
      <div className="relative rounded-3xl overflow-hidden border border-[#FAF92A]/30 bg-[#121215]">
        <div className="relative h-72 sm:h-96 w-full">
          <img
            src="/src/assets/images/cinema_entertainment_stage_1790145383259.jpg"
            alt="Cinematic Hollywood and International Home Cinema Stage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/75 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF92A]/15 border border-[#FAF92A]/40 text-[#FAF92A] text-xs font-bold">
                <Film className="w-3.5 h-3.5" />
                <span>80,000+ On-Demand Movies & Series</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Cinematic Entertainment at Home
              </h1>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                Experience blockbuster titles, award-winning documentaries, and global series in 4K HDR with immersive Dolby Atmos audio.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenFreeTrial}
                className="px-5 py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Test VOD Free Trial</span>
              </button>
              <a
                href={getFreeTrialWhatsAppLink('VOD Cinema Library')}
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

      {/* Genre Filter */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedGenre === genre
                ? 'bg-[#FAF92A] text-black shadow-sm'
                : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="p-6 rounded-2xl bg-[#121215] border border-white/10 hover:border-[#FAF92A]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#FAF92A]">{movie.genre}</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-xs text-neutral-400">{movie.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#FAF92A] transition-colors">
                    {movie.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1 bg-[#FAF92A]/15 border border-[#FAF92A]/30 px-2 py-1 rounded-lg text-xs font-bold text-[#FAF92A]">
                  <Star className="w-3.5 h-3.5 fill-[#FAF92A]" />
                  <span>{movie.rating}</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                {movie.synopsis}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400 mb-4">
                <span className="px-2 py-1 bg-white/5 rounded border border-white/5">
                  {movie.quality}
                </span>
                <span className="px-2 py-1 bg-white/5 rounded border border-white/5">
                  {movie.audio}
                </span>
                <span className="px-2 py-1 bg-white/5 rounded border border-white/5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#FAF92A]" />
                  {movie.duration}
                </span>
              </div>

              <div className="text-[11px] text-neutral-400">
                <strong className="text-neutral-300 font-sans">Cast: </strong>
                {movie.cast.join(', ')}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-[#FAF92A] font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Included with every plan</span>
              </span>

              <button
                onClick={() => onWatchStream(movie.title, movie.genre, movie.quality)}
                className="px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
