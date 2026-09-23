import React, { useState, useEffect } from 'react';
import { Tv, MessageSquare, Menu, X, Zap, User } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_DISPLAY, WHATSAPP_PHONE_RAW } from '../../utils/whatsapp';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenFreeTrial: () => void;
  onOpenAuth: () => void;
  userLoggedIn?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenFreeTrial,
  onOpenAuth,
  userLoggedIn = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'channels', label: 'Channels' },
    { id: 'sports', label: 'Sports' },
    { id: 'entertainment', label: 'Movies' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'devices', label: 'Devices' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Clean Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
            aria-label="Streamora Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FAF92A] to-[#FDBF2D] flex items-center justify-center text-black shadow-md group-hover:scale-105 transition-transform duration-200">
              <Tv className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
              Streamora<span className="text-[#FAF92A]">.</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#FAF92A] font-semibold'
                      : 'text-neutral-300 hover:text-[#FAF92A]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FAF92A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Free Trial Button */}
            <button
              onClick={onOpenFreeTrial}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#FAF92A] hover:bg-[#FDBF2D] rounded-lg transition-all shadow-sm hover:shadow-[#FAF92A]/20 flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Free Trial</span>
            </button>

            {/* WhatsApp Quick Chat */}
            <a
              href={getWhatsAppLink('Hello Streamora Support! I would like details about your IPTV service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#FAF92A]/50 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#FAF92A]" />
              <span>WhatsApp</span>
            </a>

            {/* Portal / Dashboard */}
            <button
              onClick={onOpenAuth}
              className="p-2 text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
              title={userLoggedIn ? 'Go to Dashboard' : 'Login / Sign Up'}
              aria-label="Account Access"
            >
              <User className="w-4 h-4 text-[#FAF92A]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenFreeTrial}
              className="px-2.5 py-1.5 text-xs font-bold text-black bg-[#FAF92A] rounded-md whitespace-nowrap cursor-pointer"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0C] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-white/10 text-[#FAF92A] font-semibold'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreeTrial();
              }}
              className="w-full py-2.5 text-sm font-bold text-black bg-[#FAF92A] rounded-lg text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              Start 24H Free Trial
            </button>
            <a
              href={getWhatsAppLink('Hello Streamora! I want to chat about IPTV on WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-semibold text-white bg-white/10 border border-white/15 rounded-lg text-center flex items-center justify-center gap-2 cursor-pointer hover:bg-white/15 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#FAF92A]" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2 text-sm text-neutral-300 hover:text-white bg-white/5 rounded-lg text-center"
            >
              {userLoggedIn ? 'Go to Client Portal' : 'Login / Register Account'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
