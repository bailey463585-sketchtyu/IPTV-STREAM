import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare, Zap } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';

interface FaqPageProps {
  onOpenFreeTrial: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenFreeTrial }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const categories = ['All', 'General', 'Setup', 'Billing', 'Technical', 'Devices'];

  const toggleAccordion = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchCat = selectedCat === 'All' || faq.category === selectedCat;
    const matchSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF92A]/10 border border-[#FAF92A]/30 text-xs font-bold text-[#FAF92A]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge Base & Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
          Everything you need to know about Streamora IPTV, device compatibility, streaming settings, and ordering via WhatsApp.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search question, keyword, setup..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#121215] border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FAF92A] shadow-xl"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === cat
                ? 'bg-[#FAF92A] text-black shadow-md'
                : 'bg-[#121215] border border-white/10 text-neutral-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-[#121215] border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="text-sm font-bold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#FAF92A] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121215] via-[#18181D] to-[#121215] border border-[#FAF92A]/40 text-center space-y-4">
        <h3 className="text-xl font-extrabold text-white">
          Still Have Questions or Need Custom Help?
        </h3>
        <p className="text-xs text-neutral-300 max-w-lg mx-auto">
          Our human support team is online 24/7 on WhatsApp to answer any queries and assist with setups.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={getWhatsAppLink('Hello Streamora Support! I have a question not covered in your FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onOpenFreeTrial}
            className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Zap className="w-4 h-4 text-[#FAF92A] fill-[#FAF92A]" />
            <span>Request 24h Free Trial</span>
          </button>
        </div>
      </div>
    </div>
  );
};
