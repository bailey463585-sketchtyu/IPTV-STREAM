import React, { useState } from 'react';
import { ShieldCheck, FileText, RefreshCw, AlertTriangle, ArrowLeft } from 'lucide-react';
import { WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

interface LegalPageProps {
  initialTab?: 'terms' | 'privacy' | 'refund' | 'dmca';
  onNavigate: (page: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'terms', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'refund' | 'dmca'>(initialTab);

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Top Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="text-xs text-neutral-400 hover:text-[#FAF92A] flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <span className="text-xs text-neutral-500">
          Last Updated: January 2025
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {[
          { id: 'terms', label: 'Terms of Service' },
          { id: 'privacy', label: 'Privacy Policy' },
          { id: 'refund', label: 'Refund Policy' },
          { id: 'dmca', label: 'DMCA & Compliance' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#FAF92A] text-black shadow-md'
                : 'bg-white/5 text-neutral-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Body */}
      <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-white">Terms of Service</h1>
            <p>
              Welcome to Streamora. By accessing our website, subscribing to our services, or receiving playlist credentials via email or WhatsApp, you agree to be bound by these Terms of Service.
            </p>
            <h3 className="text-base font-bold text-white pt-2">1. Personal & Domestic Use</h3>
            <p>
              All accounts and playlists provided by Streamora are licensed exclusively for private, domestic, non-commercial entertainment. Commercial public rebroadcasting in venues such as pubs, stadiums, or hotels requires a separate commercial enterprise contract.
            </p>
            <h3 className="text-base font-bold text-white pt-2">2. Concurrent Device Connections</h3>
            <p>
              Subscribers agree not to exceed the allotted number of concurrent device streams purchased under their active plan (1, 2, 3, or 4 simultaneous streams). Automated anti-abuse filters will temporarily lock accounts if duplicate simultaneous IP requests exceed the purchased limit.
            </p>
            <h3 className="text-base font-bold text-white pt-2">3. Service Availability</h3>
            <p>
              Streamora engineers strive for 99.9% uptime across all edge nodes. Periodic routine maintenance windows are announced in advance via customer notification channels.
            </p>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-white">Privacy Policy</h1>
            <p>
              Streamora is strictly committed to protecting user privacy, data confidentiality, and digital security. We never sell, lease, or monetize customer information with third-party advertisers.
            </p>
            <h3 className="text-base font-bold text-white pt-2">1. Information We Collect</h3>
            <p>
              We collect minimal operational data necessary to provision and maintain your subscription: email address, WhatsApp number (for customer support dispatch), and basic device diagnostic info (player app type, buffer latency) to optimize CDN routing.
            </p>
            <h3 className="text-base font-bold text-white pt-2">2. Zero Activity Logging</h3>
            <p>
              Streamora maintains a strict zero-log policy regarding your viewing history. We do not store records of which specific channels, movies, or sports events you watch.
            </p>
            <h3 className="text-base font-bold text-white pt-2">3. Payment Security</h3>
            <p>
              All online payment transactions are processed using encrypted tokenization through authorized merchant providers. We never store raw credit card numbers on our servers.
            </p>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-white">Refund Policy (30-Day Guarantee)</h1>
            <p>
              We want you to be completely satisfied with your streaming experience. Streamora offers a 30-day money-back guarantee for all annual and multi-month packages.
            </p>
            <h3 className="text-base font-bold text-white pt-2">1. Refund Eligibility</h3>
            <p>
              If our technical team cannot resolve streaming issues on your verified broadband connection (such as persistent unresolvable buffering or channel delivery failure), you may request a refund within 30 days of purchase.
            </p>
            <h3 className="text-base font-bold text-white pt-2">2. How to Request a Refund</h3>
            <p>
              To initiate a refund, simply send your Order ID and registration email to our WhatsApp customer desk or email support@streamora.tv. Refunds are processed within 3 to 5 business days.
            </p>
          </div>
        )}

        {activeTab === 'dmca' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-black text-white">DMCA & Compliance Notice</h1>
            <p>
              Streamora complies with the Digital Millennium Copyright Act (DMCA) and international intellectual property treaties.
            </p>
            <h3 className="text-base font-bold text-white pt-2">1. Notice & Takedown</h3>
            <p>
              Streamora operates as a technical cloud transport intermediary and edge relay network. If you are a copyright owner or authorized representative and believe that content distributed across our network infringes upon your rights, please submit a formal takedown request containing:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Sufficient proof of authorization or ownership.</li>
              <li>Direct URL or channel feed locator.</li>
              <li>Contact details including address, telephone, and email.</li>
            </ul>
            <p className="pt-2">
              All compliance inquiries should be directed to legal@streamora.tv.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
