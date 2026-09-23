import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Activity, Wifi, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { getFreeTrialWhatsAppLink } from '../../utils/whatsapp';

interface LivePlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  streamTitle: string;
  category?: string;
  quality?: string;
  onOpenFreeTrial?: () => void;
}

export const LivePlayerModal: React.FC<LivePlayerModalProps> = ({
  isOpen,
  onClose,
  streamTitle,
  category = 'Sports Live',
  quality = '4K UHD',
  onOpenFreeTrial,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedRes, setSelectedRes] = useState<'4K' | '1080p' | '720p'>('4K');
  const [bitrate, setBitrate] = useState(19.2);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setBitrate(Number((18.5 + Math.random() * 2.5).toFixed(1)));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121215] border border-[#FAF92A]/40 rounded-2xl shadow-2xl overflow-hidden my-4">
        {/* Top Header */}
        <div className="bg-[#0A0A0C] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-500/20 text-xs font-bold text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              LIVE
            </span>
            <div>
              <h3 className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">{streamTitle}</h3>
              <p className="text-[11px] text-neutral-400">{category} · Streamora CDN Edge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Close Stream Player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Simulated Broadcast Visual */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-[#18181D] to-neutral-900 flex items-center justify-center">
            {/* Dynamic ambient pulse */}
            <div className="w-72 h-72 rounded-full bg-[#FAF92A]/5 blur-3xl absolute animate-pulse pointer-events-none" />

            <div className="text-center p-6 relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-[#FAF92A]/40 flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(250,249,42,0.2)]">
                {isPlaying ? (
                  <Activity className="w-8 h-8 text-[#FAF92A] animate-pulse" />
                ) : (
                  <Pause className="w-8 h-8 text-neutral-400" />
                )}
              </div>
              <h4 className="text-lg font-bold text-white tracking-wide">{streamTitle}</h4>
              <p className="text-xs text-neutral-400 mt-1">
                {isPlaying ? 'Buffering 0ms · HLS Low-Latency Adaptive Stream Active' : 'Stream Paused'}
              </p>
            </div>
          </div>

          {/* Watermark in corner */}
          <div className="absolute top-4 right-4 z-20 pointer-events-none flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white border border-white/10">
            <span className="text-[#FAF92A]">STREAMORA</span>
            <span className="text-[10px] text-neutral-400">4K ULTRA</span>
          </div>

          {/* Controls Bar Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-[#FAF92A] text-black rounded-lg hover:bg-[#FDBF2D] transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-300 font-mono">
                <Wifi className="w-3.5 h-3.5 text-[#FAF92A]" />
                <span>{bitrate} Mbps</span>
                <span className="text-neutral-500">·</span>
                <span>60 FPS</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Quality Switcher */}
              <div className="flex bg-black/60 border border-white/15 rounded-lg p-0.5 text-[11px]">
                {(['4K', '1080p', '720p'] as const).map((res) => (
                  <button
                    key={res}
                    onClick={() => setSelectedRes(res)}
                    className={`px-2 py-0.5 rounded font-semibold transition-colors cursor-pointer ${
                      selectedRes === res ? 'bg-[#FAF92A] text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {res}
                  </button>
                ))}
              </div>

              <button
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg cursor-pointer"
                title="Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner with WhatsApp and Free Trial */}
        <div className="p-4 bg-[#0A0A0C] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-[#FAF92A] shrink-0" />
            <span>Authorized preview stream. Unlock 20,000+ live channels & 80,000+ VOD on your TV.</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                if (onOpenFreeTrial) onOpenFreeTrial();
              }}
              className="px-3.5 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              Claim 24h Free Trial
            </button>
            <a
              href={getFreeTrialWhatsAppLink(streamTitle)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer border border-white/15"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
