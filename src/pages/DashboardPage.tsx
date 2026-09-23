import React, { useState } from 'react';
import {
  Tv,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw,
  MessageSquare,
  LogOut,
  Zap,
  Play,
  Monitor,
  Smartphone,
  ShieldCheck,
  Download,
  Activity,
  Wifi,
  Plus,
  Sliders,
  Gauge,
  Globe,
  Radio
} from 'lucide-react';
import { WHATSAPP_PHONE_RAW, WHATSAPP_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';

interface DashboardPageProps {
  user: { name: string; email: string };
  onSignOut: () => void;
  onWatchStream: (title: string, category: string, quality: string) => void;
  onNavigate: (page: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  user,
  onSignOut,
  onWatchStream,
  onNavigate,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isDiagnosticsRunning, setIsDiagnosticsRunning] = useState(false);
  const [diagnosticsCompleted, setDiagnosticsCompleted] = useState(false);
  const [registeredMac, setRegisteredMac] = useState('');
  const [macList, setMacList] = useState<string[]>(['00:1A:79:3F:8B:2A']);
  const [macSuccessMessage, setMacSuccessMessage] = useState(false);
  const [activeTab, setActiveTab] = useState<'credentials' | 'diagnostics' | 'devices' | 'bouquets'>('credentials');

  // Bouquet preferences
  const [bouquets, setBouquets] = useState({
    sports4k: true,
    cinemaVod: true,
    ukUsChannels: true,
    latinEurope: true,
    internationalNews: true,
    adultContent: false,
  });

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const accountInfo = {
    plan: '12 Months Ultimate VIP',
    status: 'Active (Tier-1 CDN Routing)',
    expiration: 'September 24, 2027',
    connectionsMax: 2,
    connectionsActive: 1,
    serverUrl: 'http://cdn.streamora.tv:8080',
    username: user.email.split('@')[0] || 'streamora_user',
    password: 'Str_SecurePass_9841',
    m3uUrl: `http://cdn.streamora.tv:8080/get.php?username=${user.email.split('@')[0] || 'streamora_user'}&password=Str_SecurePass_9841&type=m3u_plus&output=ts`,
    epgUrl: 'http://cdn.streamora.tv:8080/xmltv.php?username=streamora_user&password=Str_SecurePass_9841',
  };

  const handleDownloadM3U = () => {
    const m3uContent = `#EXTM3U\n#EXTINF:-1 tvg-id="prime.sports.4k" tvg-name="Prime Sports Ultra 4K" tvg-logo="https://streamora.tv/logos/primesports.png" group-title="VIP 4K SPORTS",Prime Sports Ultra 4K\n${accountInfo.serverUrl}/live/${accountInfo.username}/${accountInfo.password}/101.ts\n#EXTINF:-1 tvg-id="cinema.prem.one" tvg-name="Cinema Premiere One 4K" group-title="VIP CINEMA",Cinema Premiere One 4K\n${accountInfo.serverUrl}/live/${accountInfo.username}/${accountInfo.password}/202.ts\n`;
    const blob = new Blob([m3uContent], { type: 'audio/x-mpegurl' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `streamora_playlist_${accountInfo.username}.m3u`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const runNetworkDiagnostics = () => {
    setIsDiagnosticsRunning(true);
    setDiagnosticsCompleted(false);
    setTimeout(() => {
      setIsDiagnosticsRunning(false);
      setDiagnosticsCompleted(true);
    }, 2000);
  };

  const handleAddMac = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeredMac.trim()) return;
    const cleanMac = registeredMac.trim().toUpperCase();
    if (!macList.includes(cleanMac)) {
      setMacList([...macList, cleanMac]);
    }
    setRegisteredMac('');
    setMacSuccessMessage(true);
    setTimeout(() => setMacSuccessMessage(false), 3000);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Welcome Bar */}
      <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FAF92A] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#FAF92A] uppercase tracking-wider">
              {accountInfo.status}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Welcome Back, {user.name}
          </h1>
          <p className="text-xs text-neutral-400">
            Account: {user.email} · Subscription ID: <span className="font-mono text-white">STR-VIP-88192</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onWatchStream('Prime Sports Ultra 4K', 'Sports', '4K UHD')}
            className="px-4 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-colors"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>Launch Web Player</span>
          </button>

          <button
            onClick={onSignOut}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold rounded-xl border border-white/10 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveTab('credentials')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'credentials'
              ? 'bg-[#FAF92A] text-black shadow-sm'
              : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white'
          }`}
        >
          <Tv className="w-3.5 h-3.5" />
          <span>Xtream & M3U Playlists</span>
        </button>

        <button
          onClick={() => setActiveTab('diagnostics')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'diagnostics'
              ? 'bg-[#FAF92A] text-black shadow-sm'
              : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white'
          }`}
        >
          <Gauge className="w-3.5 h-3.5" />
          <span>CDN Diagnostics & Speed</span>
        </button>

        <button
          onClick={() => setActiveTab('devices')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'devices'
              ? 'bg-[#FAF92A] text-black shadow-sm'
              : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Active Screens & MAC Stalker</span>
        </button>

        <button
          onClick={() => setActiveTab('bouquets')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'bouquets'
              ? 'bg-[#FAF92A] text-black shadow-sm'
              : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Bouquet Customizer</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          {/* TAB 1: CREDENTIALS */}
          {activeTab === 'credentials' && (
            <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-black text-white">Xtream Codes API Credentials</h2>
                  <p className="text-xs text-neutral-400">
                    Use these in IPTV Smarters, TiviMate, XCIPTV, or IBO Player on your Smart TV / Firestick.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#FAF92A]/10 text-[#FAF92A] text-xs font-mono font-bold">
                    API v2.9
                  </span>
                  <button
                    onClick={handleDownloadM3U}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-bold rounded-lg border border-white/15 flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#FAF92A]" />
                    <span>Download .M3U</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs pt-1">
                {/* Server URL */}
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase font-sans tracking-wider block mb-1">
                    Server URL / Portal URL
                  </span>
                  <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-neutral-200">
                    <span className="truncate">{accountInfo.serverUrl}</span>
                    <button
                      onClick={() => copyText(accountInfo.serverUrl, 'server')}
                      className="p-1 hover:text-[#FAF92A] text-neutral-400 ml-2 cursor-pointer"
                      title="Copy Server URL"
                    >
                      {copiedKey === 'server' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Username & Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-neutral-400 text-[10px] uppercase font-sans tracking-wider block mb-1">
                      Xtream Username
                    </span>
                    <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-neutral-200">
                      <span className="truncate">{accountInfo.username}</span>
                      <button
                        onClick={() => copyText(accountInfo.username, 'user')}
                        className="p-1 hover:text-[#FAF92A] text-neutral-400 ml-2 cursor-pointer"
                        title="Copy Username"
                      >
                        {copiedKey === 'user' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-neutral-400 text-[10px] uppercase font-sans tracking-wider block mb-1">
                      Xtream Password
                    </span>
                    <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-neutral-200">
                      <span className="truncate">{accountInfo.password}</span>
                      <button
                        onClick={() => copyText(accountInfo.password, 'pass')}
                        className="p-1 hover:text-[#FAF92A] text-neutral-400 ml-2 cursor-pointer"
                        title="Copy Password"
                      >
                        {copiedKey === 'pass' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* M3U Playlist URL */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-neutral-400 text-[10px] uppercase font-sans tracking-wider">
                      M3U Plus Playlist URL (Full Bouquets)
                    </span>
                    <span className="text-[10px] text-[#FAF92A] font-sans font-bold">HLS / MPEG-TS Compatible</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-neutral-200">
                    <span className="truncate text-[11px]">{accountInfo.m3uUrl}</span>
                    <button
                      onClick={() => copyText(accountInfo.m3uUrl, 'm3u')}
                      className="p-1 hover:text-[#FAF92A] text-neutral-400 ml-2 cursor-pointer"
                      title="Copy M3U URL"
                    >
                      {copiedKey === 'm3u' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* EPG XMLTV URL */}
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase font-sans tracking-wider block mb-1">
                    XMLTV Electronic Program Guide (EPG)
                  </span>
                  <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-neutral-200">
                    <span className="truncate text-[11px]">{accountInfo.epgUrl}</span>
                    <button
                      onClick={() => copyText(accountInfo.epgUrl, 'epg')}
                      className="p-1 hover:text-[#FAF92A] text-neutral-400 ml-2 cursor-pointer"
                      title="Copy EPG URL"
                    >
                      {copiedKey === 'epg' ? <Check className="w-4 h-4 text-[#FAF92A]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIAGNOSTICS */}
          {activeTab === 'diagnostics' && (
            <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-black text-white">Edge CDN Health & Stream Telemetry</h2>
                  <p className="text-xs text-neutral-400">
                    Verify server ping, cluster load, and 4K bandwidth throughput from your ISP.
                  </p>
                </div>
                <button
                  onClick={runNetworkDiagnostics}
                  disabled={isDiagnosticsRunning}
                  className="px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isDiagnosticsRunning ? 'animate-spin' : ''}`} />
                  <span>{isDiagnosticsRunning ? 'Testing...' : 'Run Diagnostics'}</span>
                </button>
              </div>

              {/* Edge Node Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-4 text-[10px] font-mono uppercase text-neutral-400 px-4">
                  <span>Edge Location</span>
                  <span>Cluster Status</span>
                  <span>Latency</span>
                  <span className="text-right">4K Readiness</span>
                </div>

                {[
                  { name: 'Frankfurt (DE-01)', status: 'Optimal', ping: '14 ms', pass: true },
                  { name: 'London (UK-02)', status: 'Optimal', ping: '19 ms', pass: true },
                  { name: 'New York (US-04)', status: 'Optimal', ping: '38 ms', pass: true },
                  { name: 'Dubai (UAE-01)', status: 'Optimal', ping: '42 ms', pass: true },
                  { name: 'Singapore (SG-01)', status: 'Optimal', ping: '65 ms', pass: true },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2 w-1/4">
                      <Globe className="w-3.5 h-3.5 text-[#FAF92A]" />
                      <span className="font-semibold text-white">{node.name}</span>
                    </div>
                    <div className="w-1/4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                        {node.status}
                      </span>
                    </div>
                    <div className="w-1/4 font-mono text-neutral-300">
                      {isDiagnosticsRunning ? '...' : node.ping}
                    </div>
                    <div className="w-1/4 text-right">
                      <span className="text-[#FAF92A] font-bold text-[11px] inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Bufferless</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {diagnosticsCompleted && (
                <div className="p-4 rounded-2xl bg-[#FAF92A]/10 border border-[#FAF92A]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#FAF92A]" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Diagnostics Report: 100% Passed</h4>
                      <p className="text-[11px] text-neutral-300">
                        Zero packet loss detected. Your current network route is locked to Frankfurt DE-01 with 19.4 Mbps headroom.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: DEVICES & MAC */}
          {activeTab === 'devices' && (
            <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-lg font-black text-white">Active Device Connections</h2>
                <p className="text-xs text-neutral-400">
                  Manage your concurrent playback devices or register MAG / Stalker Portal MAC addresses.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FAF92A]/10 text-[#FAF92A]">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white">Living Room Smart TV</h3>
                      <p className="text-[11px] text-neutral-400">TiviMate IPTV · Samsung 4K</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#FAF92A]/20 text-[#FAF92A] text-[10px] font-bold">
                    Active
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 text-neutral-400">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white">Bedroom Firestick 4K</h3>
                      <p className="text-[11px] text-neutral-400">XCIPTV Player</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-400 text-[10px] font-semibold">
                    Standby
                  </span>
                </div>
              </div>

              {/* MAG / Stalker Portal MAC Registration */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">MAG Box / Formuler MAC Registration</h3>
                    <p className="text-xs text-neutral-400">
                      Portal URL: <span className="font-mono text-[#FAF92A]">http://portal.streamora.tv:8080/c/</span>
                    </p>
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    {macList.length} / 2 Stalker Slots
                  </span>
                </div>

                {/* MAC List */}
                <div className="space-y-2">
                  {macList.map((mac, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-black/40 rounded-xl border border-white/10 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-[#FAF92A]" />
                        <span className="font-mono text-white font-bold">{mac}</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Authorized on Portal
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddMac} className="flex gap-2">
                  <input
                    type="text"
                    value={registeredMac}
                    onChange={(e) => setRegisteredMac(e.target.value)}
                    placeholder="Enter MAC Address (e.g. 00:1A:79:XX:XX:XX)"
                    className="flex-1 px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 font-mono focus:outline-none focus:border-[#FAF92A]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Register MAC</span>
                  </button>
                </form>

                {macSuccessMessage && (
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>MAC address submitted and authorized. Restart your MAG device.</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: BOUQUETS */}
          {activeTab === 'bouquets' && (
            <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-lg font-black text-white">Bouquet & Category Customizer</h2>
                <p className="text-xs text-neutral-400">
                  Select which channel categories to synchronize. Reducing unwanted bouquets speeds up EPG load times on Smart TVs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'sports4k', label: 'VIP 4K & FHD Sports (All Leagues)', desc: 'EPL, Champions League, UFC, F1' },
                  { key: 'cinemaVod', label: 'VOD 4K Movies & Cinema Series', desc: '80,000+ On-Demand titles' },
                  { key: 'ukUsChannels', label: 'US, UK & Canadian Live Networks', desc: 'Prime entertainment, news & cable' },
                  { key: 'latinEurope', label: 'European & Latin Continental Feeds', desc: 'Spain, France, Italy, Germany, LATAM' },
                  { key: 'internationalNews', label: 'Global 24/7 News & Documentaries', desc: 'Discovery, BBC, CNN, NatGeo' },
                  { key: 'adultContent', label: 'Adult 18+ Channels (Password Protected)', desc: 'Optional PIN lockable feeds' },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 flex items-start justify-between gap-3 cursor-pointer transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">{item.label}</h4>
                      <p className="text-[11px] text-neutral-400">{item.desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={bouquets[item.key as keyof typeof bouquets]}
                      onChange={(e) =>
                        setBouquets({ ...bouquets, [item.key]: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 rounded accent-[#FAF92A] cursor-pointer"
                    />
                  </label>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <span className="text-xs text-neutral-400">
                  Bouquet settings are auto-applied to your live M3U URL.
                </span>
                <button
                  onClick={() => copyText(accountInfo.m3uUrl, 'custom_m3u')}
                  className="px-4 py-2 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedKey === 'custom_m3u' ? 'Copied Customized Link' : 'Copy Filtered M3U'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Plan Status & WhatsApp VIP Support */}
        <div className="lg:col-span-4 space-y-6">
          {/* Plan Details Card */}
          <div className="bg-[#121215] border border-white/10 rounded-3xl p-6 space-y-4">
            <h2 className="text-base font-black text-white">Current Subscription</h2>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Plan Name:</span>
                <span className="text-white font-bold">{accountInfo.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Valid Until:</span>
                <span className="text-[#FAF92A] font-mono">{accountInfo.expiration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Max Screens:</span>
                <span className="text-white font-mono">{accountInfo.connectionsMax} Concurrent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Anti-Freeze Buffer:</span>
                <span className="text-emerald-400 font-bold">Enabled (v9.4)</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('pricing')}
              className="w-full py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 transition-colors cursor-pointer"
            >
              Extend / Upgrade Subscription
            </button>
          </div>

          {/* Direct WhatsApp Support Box */}
          <div className="bg-gradient-to-br from-[#FAF92A]/15 to-[#FDBF2D]/10 border border-[#FAF92A]/40 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF92A] text-black flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 fill-black" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#FAF92A] uppercase tracking-wider block">
                  VIP Direct Line
                </span>
                <h3 className="text-sm font-extrabold text-white">WhatsApp Desk</h3>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Have buffering, need channels reloaded, or want another screen added? Message our engineers directly on WhatsApp:
            </p>

            <a
              href={getWhatsAppLink(`Hello Streamora VIP Desk! My subscriber email is ${user.email}. I need support.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#FAF92A] hover:bg-[#FDBF2D] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
