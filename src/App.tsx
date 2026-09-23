import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { FreeTrialModal } from './components/common/FreeTrialModal';
import { CheckoutModal } from './components/common/CheckoutModal';
import { LivePlayerModal } from './components/common/LivePlayerModal';
import { CookieBanner } from './components/common/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { ChannelsPage } from './pages/ChannelsPage';
import { SportsPage } from './pages/SportsPage';
import { EntertainmentPage } from './pages/EntertainmentPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { DevicesPage } from './pages/DevicesPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { LegalPage } from './pages/LegalPage';

import { PricingPlan } from './types';
import { PRICING_PLANS } from './data/mockData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<PricingPlan | null>(null);
  const [playerConfig, setPlayerConfig] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    quality: string;
  }>({
    isOpen: false,
    title: 'Prime Sports Ultra 4K',
    category: 'Sports',
    quality: '4K UHD',
  });
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  // Dynamic SEO title & description per page
  useEffect(() => {
    const pageTitles: Record<string, { title: string; desc: string }> = {
      home: {
        title: 'Streamora - Premium IPTV & 4K Live TV Streaming Service',
        desc: 'Stream 20,000+ 4K live channels, sports, and 80,000+ movies on any device with anti-freeze technology and 24/7 VIP WhatsApp support.',
      },
      channels: {
        title: 'Live TV Channels & EPG Guide · Streamora IPTV',
        desc: 'Explore 20,000+ global live TV channels in 4K and FHD across news, sports, entertainment, and kids.',
      },
      sports: {
        title: 'Live Sports Hub & PPV Streams in 4K · Streamora',
        desc: 'Stream Champions League, Premier League, Formula 1, NBA, UFC, and Boxing in uncompressed 4K 60FPS.',
      },
      entertainment: {
        title: 'VOD Movies & Cinema Series Library · Streamora',
        desc: 'Discover over 80,000+ movies and series in 4K HDR with multi-subtitles and Dolby audio.',
      },
      features: {
        title: 'Anti-Freeze Streaming Technology & CDN · Streamora',
        desc: 'Learn how Streamora 9.4 anti-buffering CDN engine delivers uninterrupted television playback.',
      },
      pricing: {
        title: 'Subscription Packages & Pricing Plans · Streamora',
        desc: 'Affordable IPTV subscription plans from $12.99. Instant activation and 24/7 WhatsApp VIP support.',
      },
      devices: {
        title: 'Device Setup Guides & Tutorials · Streamora IPTV',
        desc: 'Quick 2-minute setup guides for Smart TV, Firestick, Android, Apple TV, MAG, and Windows.',
      },
      faq: {
        title: 'Frequently Asked Questions & Support · Streamora',
        desc: 'Common questions about IPTV setup, speed requirements, device pairing, and instant activation.',
      },
      about: {
        title: 'About Streamora · Modern Television Architecture',
        desc: 'Learn about our infrastructure, broadcast engineering background, and customer commitment.',
      },
      contact: {
        title: 'Contact Customer Care · 24/7 WhatsApp Desk · Streamora',
        desc: 'Reach our engineering and support desk on WhatsApp for 2-minute activations and assistance.',
      },
      blog: {
        title: 'Streaming Insights & IPTV Tutorials · Streamora Blog',
        desc: 'Expert guides on setting up TiviMate, optimizing Wi-Fi, and getting the best 4K picture quality.',
      },
      auth: {
        title: 'Customer Portal Sign In · Streamora',
        desc: 'Access your active subscriptions, Xtream Codes, and EPG playlist links.',
      },
      dashboard: {
        title: 'Subscriber Dashboard · Streamora Account',
        desc: 'Manage your active IPTV subscriptions, playlists, and device connections.',
      },
      terms: {
        title: 'Terms of Service · Streamora',
        desc: 'Streamora domestic subscription terms, usage policies, and service rules.',
      },
      privacy: {
        title: 'Privacy Policy · Streamora',
        desc: 'How Streamora protects subscriber privacy, encryption, and data confidentiality.',
      },
      refund: {
        title: 'Refund & 30-Day Money Back Guarantee · Streamora',
        desc: 'Our 30-day money-back satisfaction guarantee policy and request guidelines.',
      },
      dmca: {
        title: 'DMCA & Compliance · Streamora',
        desc: 'Digital Millennium Copyright Act compliance notice and agent contact.',
      },
    };

    const currentMeta = pageTitles[currentPage] || pageTitles.home;
    document.title = currentMeta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentMeta.desc);
    }
  }, [currentPage]);

  // Scroll to top upon page navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlayer = (title: string, category: string = 'Sports', quality: string = '4K UHD') => {
    setPlayerConfig({
      isOpen: true,
      title,
      category,
      quality,
    });
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setCheckoutPlan(plan);
  };

  const handleAuthSuccess = (userData: { name: string; email: string }) => {
    setCurrentUser(userData);
    setCurrentPage('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col font-sans selection:bg-[#FAF92A] selection:text-black">
      {/* Navbar Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
        onOpenAuth={() => handleNavigate(currentUser ? 'dashboard' : 'auth')}
        userLoggedIn={!!currentUser}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onSelectPlan={handleSelectPlan}
            onWatchStream={handleOpenPlayer}
          />
        )}

        {currentPage === 'channels' && (
          <ChannelsPage
            onWatchStream={handleOpenPlayer}
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'sports' && (
          <SportsPage
            onWatchStream={handleOpenPlayer}
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'entertainment' && (
          <EntertainmentPage
            onWatchStream={handleOpenPlayer}
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'features' && (
          <FeaturesPage
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onSelectPlan={handleSelectPlan}
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'devices' && (
          <DevicesPage
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage onOpenFreeTrial={() => setIsFreeTrialOpen(true)} />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'blog' && (
          <BlogPage
            onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'auth' && (
          <AuthPage
            initialMode="login"
            onSuccessAuth={handleAuthSuccess}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'signup' && (
          <AuthPage
            initialMode="signup"
            onSuccessAuth={handleAuthSuccess}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'dashboard' && (
          <DashboardPage
            user={currentUser || { name: 'VIP Subscriber', email: 'vip@streamora.tv' }}
            onSignOut={handleSignOut}
            onWatchStream={handleOpenPlayer}
            onNavigate={handleNavigate}
          />
        )}

        {['terms', 'privacy', 'refund', 'dmca'].includes(currentPage) && (
          <LegalPage initialTab={currentPage as any} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
      />

      {/* Floating 24/7 WhatsApp Hotline Button */}
      <WhatsAppFloating />

      {/* Cookie / Privacy Consent Notice */}
      <CookieBanner />

      {/* Modals */}
      <FreeTrialModal
        isOpen={isFreeTrialOpen}
        onClose={() => setIsFreeTrialOpen(false)}
        onLaunchPlayer={(channel) => handleOpenPlayer(channel, 'Sports', '4K UHD')}
      />

      <CheckoutModal
        plan={checkoutPlan}
        isOpen={!!checkoutPlan}
        onClose={() => setCheckoutPlan(null)}
        onSuccessOrder={(order) => {
          // If user ordered, we can auto sign-in or keep confirmation open
          setCurrentUser({
            name: order.customerName || 'New Subscriber',
            email: order.customerEmail || 'subscriber@streamora.tv',
          });
        }}
      />

      <LivePlayerModal
        isOpen={playerConfig.isOpen}
        onClose={() => setPlayerConfig(prev => ({ ...prev, isOpen: false }))}
        streamTitle={playerConfig.title}
        category={playerConfig.category}
        quality={playerConfig.quality}
        onOpenFreeTrial={() => setIsFreeTrialOpen(true)}
      />
    </div>
  );
}
