import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, X, MessageSquare, Zap, Share2, Check } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { WHATSAPP_PHONE_RAW, getFreeTrialWhatsAppLink } from '../utils/whatsapp';

interface BlogPageProps {
  onOpenFreeTrial: () => void;
  onNavigate: (page: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenFreeTrial, onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Guides, Tutorials & Technology Benchmarks</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Streamora Knowledge Hub
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          In-depth technical guides, player configurations, device walkthroughs, and optimization tips to extract maximum 4K streaming performance from your setup.
        </p>
      </div>

      {/* Featured Editorial Visual Card */}
      <div className="relative rounded-3xl overflow-hidden border border-[#FAF92A]/30 shadow-2xl max-w-5xl mx-auto group">
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#121215]">
          <img
            src="/src/assets/images/blog_streaming_guide_1790145415601.jpg"
            alt="IPTV technical diagnostics and high-speed streaming remote telemetry"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAF92A] font-bold">
                Featured Engineering Deep-Dive
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-white drop-shadow">
                Mastering Bufferless 4K: Network Buffers & Edge Caching
              </h2>
            </div>
            <button
              onClick={() => setSelectedPost(BLOG_POSTS[0])}
              className="px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-3xl bg-[#121215] border border-white/10 hover:border-[#FAF92A]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-3">
                <span className="text-[#FAF92A] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#FAF92A]" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-lg font-extrabold text-white group-hover:text-[#FAF92A] transition-colors leading-snug mb-3">
                {post.title}
              </h2>

              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500">{post.date}</span>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs text-[#FAF92A] font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#121215] border border-[#FAF92A]/40 rounded-3xl p-6 sm:p-10 shadow-2xl my-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="text-[#FAF92A] font-bold uppercase">{selectedPost.category}</span>
                  <span>·</span>
                  <span>{selectedPost.date}</span>
                  <span>·</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#FAF92A]" />
                    {selectedPost.author}
                  </span>
                  <button
                    onClick={handleShare}
                    className="text-xs text-neutral-300 hover:text-[#FAF92A] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#FAF92A]" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Link Copied' : 'Share Article'}</span>
                  </button>
                </div>
              </div>

              {/* Prose Content */}
              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Bottom In-Article CTA */}
              <div className="p-6 rounded-2xl bg-[#0A0A0C] border border-[#FAF92A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Ready to test this on your TV or Firestick?
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Get an instant 24-hour test line or message our 24/7 WhatsApp desk.
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      onOpenFreeTrial();
                    }}
                    className="px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Zap className="w-3.5 h-3.5 fill-black" />
                    <span>Free Trial</span>
                  </button>
                  <a
                    href={getFreeTrialWhatsAppLink(selectedPost.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer border border-white/10"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
