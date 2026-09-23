import { Channel, SportsEvent, MovieItem, PricingPlan, DeviceGuide, FAQItem, BlogPost } from '../types';

export const CHANNELS_DATA: Channel[] = [
  {
    id: 'ch-1',
    name: 'Prime Sports Ultra 4K',
    category: 'Sports',
    currentShow: 'Premier Champions Final: Live 4K UHD',
    nextShow: 'Post-Match Studio Analysis & Highlights',
    quality: '4K UHD',
    bitrate: '19.4 Mbps',
    language: 'English',
    isLive: true,
    viewers: 24820,
  },
  {
    id: 'ch-2',
    name: 'Apex Sports 1 FHD',
    category: 'Sports',
    currentShow: 'Grand Slam Masters: Center Court Live',
    nextShow: 'Motorsport Grand Prix Qualifying',
    quality: 'FHD 60FPS',
    bitrate: '12.8 Mbps',
    language: 'English',
    isLive: true,
    viewers: 14200,
  },
  {
    id: 'ch-3',
    name: 'Global News 24/7',
    category: 'News',
    currentShow: 'World Hour: Live Global Headlines',
    nextShow: 'Financial Markets & Tech Frontier',
    quality: 'FHD 60FPS',
    bitrate: '9.5 Mbps',
    language: 'English',
    isLive: true,
    viewers: 9400,
  },
  {
    id: 'ch-4',
    name: 'Cinema Premiere One',
    category: 'Cinema',
    currentShow: 'Interstellar Horizon (2025) [Dolby Atmos]',
    nextShow: 'Shadow Vanguard: Cinematic Thriller',
    quality: '4K UHD',
    bitrate: '18.2 Mbps',
    language: 'English',
    isLive: true,
    viewers: 31250,
  },
  {
    id: 'ch-5',
    name: 'Discovery Earth HD',
    category: 'Documentary',
    currentShow: 'Deep Ocean Trench Secrets: Ep. 4',
    nextShow: 'Serengeti Migration in Ultra Definition',
    quality: '4K UHD',
    bitrate: '16.0 Mbps',
    language: 'English',
    isLive: true,
    viewers: 6180,
  },
  {
    id: 'ch-6',
    name: 'Pulse Entertainment Live',
    category: 'Entertainment',
    currentShow: 'Late Night Comedy Club Live',
    nextShow: 'Acoustic Sessions Unplugged',
    quality: 'FHD 60FPS',
    bitrate: '11.0 Mbps',
    language: 'English',
    isLive: true,
    viewers: 12400,
  },
  {
    id: 'ch-7',
    name: 'Junior Universe HD',
    category: 'Kids',
    currentShow: 'Galactic Explorers: Season 3',
    nextShow: 'Dino Adventure Academy',
    quality: 'FHD 60FPS',
    bitrate: '8.4 Mbps',
    language: 'Multi-Audio',
    isLive: true,
    viewers: 8900,
  },
  {
    id: 'ch-8',
    name: 'Velocity Motorsports 4K',
    category: 'Sports',
    currentShow: 'Night City Circuit: Sprint Race Live',
    nextShow: 'Superbike Championship Highlights',
    quality: '4K UHD',
    bitrate: '21.0 Mbps',
    language: 'English',
    isLive: true,
    viewers: 19800,
  },
  {
    id: 'ch-9',
    name: 'Euro Luxe Cinema',
    category: 'Cinema',
    currentShow: 'Midnight in Monaco (Director Cut)',
    nextShow: 'The Nordic Mystery',
    quality: 'FHD 60FPS',
    bitrate: '10.5 Mbps',
    language: 'French / Sub',
    isLive: true,
    viewers: 4500,
  },
  {
    id: 'ch-10',
    name: 'International World News',
    category: 'International',
    currentShow: 'Asia-Pacific Morning Brief',
    nextShow: 'European Affairs Roundtable',
    quality: 'FHD 60FPS',
    bitrate: '8.8 Mbps',
    language: 'Multi-Lang',
    isLive: true,
    viewers: 7200,
  }
];

export const SPORTS_EVENTS: SportsEvent[] = [
  {
    id: 'sp-1',
    sport: 'Football',
    tournament: 'European Continental Cup · Semi-Final',
    match: 'Madrid Royal vs Manchester United Elite',
    status: 'Live',
    time: '78\' min',
    score: '2 - 1',
    streamQuality: '4K HDR',
    stadium: 'Metropolitan Arena',
    channelName: 'Prime Sports Ultra 4K',
  },
  {
    id: 'sp-2',
    sport: 'Motorsports',
    tournament: 'Grand Prix Championship · Qualifying',
    match: 'Monaco GP Superpole Shootout',
    status: 'Live',
    time: 'Q3 - 04:12',
    score: 'Pole: 1:10.842',
    streamQuality: '4K HDR',
    stadium: 'Circuit de Monaco',
    channelName: 'Velocity Motorsports 4K',
  },
  {
    id: 'sp-3',
    sport: 'Basketball',
    tournament: 'World Basketball Masters · Finals',
    match: 'Los Angeles Waves vs Boston Dynamos',
    status: 'Upcoming',
    time: 'Tonight 20:30 EST',
    streamQuality: 'FHD 60FPS',
    stadium: 'Staples Grand Center',
    channelName: 'Apex Sports 1 FHD',
  },
  {
    id: 'sp-4',
    sport: 'Tennis',
    tournament: 'London Grass Court Major · Men Final',
    match: 'Alcaraz Storm vs Sinner Prime',
    status: 'Upcoming',
    time: 'Tomorrow 14:00 GMT',
    streamQuality: '4K HDR',
    stadium: 'Centre Court Arena',
    channelName: 'Prime Sports Ultra 4K',
  },
  {
    id: 'sp-5',
    sport: 'Cricket',
    tournament: 'T20 Super League · Trophy Final',
    match: 'Lahore Falcons vs Karachi Kingsman',
    status: 'Upcoming',
    time: 'Tomorrow 19:00 PKT',
    streamQuality: '4K HDR',
    stadium: 'Gaddafi Stadium',
    channelName: 'Apex Sports 1 FHD',
  },
  {
    id: 'sp-6',
    sport: 'Football',
    tournament: 'London Derby Special',
    match: 'North London FC vs Chelsea Blue Stars',
    status: 'Finished',
    time: 'Full Time',
    score: '3 - 2',
    streamQuality: '4K HDR',
    stadium: 'Emirates Grand Stadium',
    channelName: 'Prime Sports Ultra 4K',
  }
];

export const MOVIES_DATA: MovieItem[] = [
  {
    id: 'mv-1',
    title: 'Neon Odyssey: 2049',
    genre: 'Sci-Fi · Thriller',
    year: 2025,
    duration: '2h 28m',
    rating: 4.9,
    quality: '4K HDR',
    audio: 'Dolby Atmos 7.1',
    synopsis: 'In an autonomous megacity powered by neural fusion, an operative uncovers a synthetic memory syndicate threatening civilization.',
    cast: ['Elena Vance', 'Cillian Drake', 'Kenji Sato']
  },
  {
    id: 'mv-2',
    title: 'The Continental Heist',
    genre: 'Action · Crime',
    year: 2024,
    duration: '1h 56m',
    rating: 4.8,
    quality: '4K HDR',
    audio: 'Dolby 5.1 Surround',
    synopsis: 'A clandestine team of European specialists executes the most audacious underground vault extraction in Zurich history.',
    cast: ['Marcus Sterling', 'Sophie Laurent', 'Lars Mikkelsen']
  },
  {
    id: 'mv-3',
    title: 'Echoes of the Arctic',
    genre: 'Documentary · Nature',
    year: 2025,
    duration: '1h 42m',
    rating: 5.0,
    quality: '4K HDR',
    audio: 'Ultra Spatial Audio',
    synopsis: 'Breathtaking 8K drone cinematics tracking the rarest polar apex predators across the disappearing winter ice pack.',
    cast: ['Narrated by Sir David Thorne']
  },
  {
    id: 'mv-4',
    title: 'The Formula Protocol',
    genre: 'Motorsport · Drama',
    year: 2024,
    duration: '2h 14m',
    rating: 4.7,
    quality: 'Dolby Vision',
    audio: 'Dolby Atmos 7.1',
    synopsis: 'Two fierce rival drivers push the physical limits of ground-effect aerodynamics in a rain-soaked championship duel.',
    cast: ['Alexander Rossi', 'Julian Weber', 'Maya Lin']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-1m',
    name: '1 Month Access',
    durationMonths: 1,
    price: 12.99,
    originalPrice: 19.99,
    monthlyEquivalent: 12.99,
    connections: 1,
    features: [
      'Over 20,000+ 4K & FHD Live Channels',
      '80,000+ VOD Movies & TV Series',
      'Electronic Program Guide (EPG 7-Day)',
      'Anti-Freeze Technology v9.4',
      'Full Sports Packages & PPV Included',
      'Instant WhatsApp Activation (< 5 mins)',
      '1 Concurrent Device Connection',
      '24/7 Dedicated Customer Support'
    ],
    recommendedFor: 'Great for testing or short-term viewing'
  },
  {
    id: 'plan-3m',
    name: '3 Months Quarter',
    durationMonths: 3,
    price: 29.99,
    originalPrice: 44.99,
    monthlyEquivalent: 9.99,
    connections: 1,
    badge: 'SAVE 25%',
    features: [
      'Over 20,000+ 4K & FHD Live Channels',
      '80,000+ VOD Movies & TV Series',
      'EPG 7-Day TV Guide & Catch-up',
      'Anti-Freeze 9.4 Fast CDN Server',
      'All Major Sports & Event PPVs',
      'Multi-Device Compatibility',
      '1 to 2 Concurrent Device Connections',
      'Priority WhatsApp VIP Support'
    ],
    recommendedFor: 'Perfect balance of flexibility & savings'
  },
  {
    id: 'plan-6m',
    name: '6 Months Premium',
    durationMonths: 6,
    price: 49.99,
    originalPrice: 79.99,
    monthlyEquivalent: 8.33,
    connections: 2,
    badge: 'POPULAR CHOICE',
    features: [
      'Over 20,000+ 4K & FHD Live Channels',
      '80,000+ VOD Movies & TV Series',
      'EPG 7-Day TV Guide & Catch-up TV',
      'High-Speed 10Gbps CDN Bufferless',
      '2 Concurrent Connections Included',
      'All Sports, Cinema & Adult (Optional)',
      'Instant Activation via WhatsApp Desk',
      'VIP Dedicated Account Manager'
    ],
    recommendedFor: 'Best choice for families and dual-device setups'
  },
  {
    id: 'plan-12m',
    name: '12 Months Ultimate',
    durationMonths: 12,
    price: 79.99,
    originalPrice: 149.99,
    monthlyEquivalent: 6.66,
    connections: 2,
    isPopular: true,
    badge: 'BEST VALUE · 55% OFF',
    features: [
      'Over 20,000+ 4K & FHD Live Channels',
      '80,000+ VOD Movies & TV Series',
      'EPG 7-Day Interactive Program Guide',
      'Zero-Buffering Ultra CDN Infrastructure',
      '2 to 4 Concurrent Device Connections',
      'Catch-up TV & Cloud DVR Recording',
      'Free Multi-device setup assistance',
      'Direct WhatsApp VIP Priority Desk',
      '30-Day Money-Back Guarantee'
    ],
    recommendedFor: 'Ultimate package with lowest cost per month'
  }
];

export const DEVICE_GUIDES: DeviceGuide[] = [
  {
    id: 'dev-smarttv',
    name: 'Smart TV (Samsung & LG)',
    category: 'Smart TV',
    compatibleApps: ['IBO Player', 'IPTV Smarters Pro', 'Smart IPTV', 'Nanomid Player'],
    difficulty: 'Easy',
    setupTime: '3 Minutes',
    steps: [
      'Search for and install "IBO Player" or "IPTV Smarters Pro" from your Samsung Tizen or LG Content Store.',
      'Launch the app and locate your device MAC address and Device Key displayed on screen.',
      'Open your Streamora Welcome Message on WhatsApp or dashboard and upload the M3U playlist link.',
      'Restart the app on your TV and enjoy instant 4K channels!'
    ]
  },
  {
    id: 'dev-firestick',
    name: 'Amazon Firestick & Fire TV',
    category: 'Streaming Stick',
    compatibleApps: ['TiviMate IPTV', 'IPTV Smarters Pro', 'XCIPTV Player'],
    difficulty: 'Easy',
    setupTime: '4 Minutes',
    steps: [
      'Open the Downloader app on your Amazon Firestick (search in Find > Search).',
      'Enter code or URL to download IPTV Smarters or TiviMate APK.',
      'Choose "Login with Xtream Codes API".',
      'Enter the Server URL, Username, and Password sent directly to your WhatsApp desk.',
      'Click Add User and wait 10 seconds for channels to synchronize.'
    ]
  },
  {
    id: 'dev-android',
    name: 'Android TV & Google TV Box',
    category: 'IPTV Box',
    compatibleApps: ['TiviMate Premium', 'Televizo', 'Sparkle TV', 'IPTV Smarters Pro'],
    difficulty: 'Easy',
    setupTime: '2 Minutes',
    steps: [
      'Open Google Play Store on your Android TV device (Nvidia Shield, Chromecast, Mi Box).',
      'Install "TiviMate" or "Televizo" directly from the Play Store.',
      'Select Add Playlist > Xtream Codes API.',
      'Input the server credentials provided by Streamora.',
      'Enjoy seamless TV guide, fast zapping, and catch-up.'
    ]
  },
  {
    id: 'dev-apple',
    name: 'Apple TV 4K, iPhone & iPad',
    category: 'Mobile & Tablet',
    compatibleApps: ['GSE Smart IPTV', 'Smarters Player Lite', 'UHF Player', 'Snappier IPTV'],
    difficulty: 'Easy',
    setupTime: '3 Minutes',
    steps: [
      'Open the App Store on your Apple device and install "Smarters Player Lite" or "GSE Smart IPTV".',
      'Open the app and select "Add Xtream Codes User".',
      'Paste your Streamora credentials or M3U link.',
      'Enjoy AirPlay streaming and smooth 60fps playback.'
    ]
  },
  {
    id: 'dev-pc',
    name: 'Windows PC & Mac OS',
    category: 'PC & Mac',
    compatibleApps: ['IPTV Smarters for Windows/Mac', 'VLC Media Player', 'Streamora Web Player'],
    difficulty: 'Easy',
    setupTime: '1 Minute',
    steps: [
      'Use our direct Streamora Web Player in Chrome/Safari, or download IPTV Smarters desktop.',
      'Paste your login details or load your M3U playlist file into VLC.',
      'Stream live sports and shows with full desktop windowed or fullscreen viewing.'
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is IPTV and how does Streamora deliver streaming?',
    answer: 'IPTV (Internet Protocol Television) delivers television programming and video content through internet protocol suites instead of traditional cable or satellite. Streamora utilizes an ultra-fast global CDN network with dedicated high-bandwidth edge servers to deliver crisp 4K and FHD streams with minimal latency and anti-freeze caching.'
  },
  {
    id: 'faq-2',
    category: 'Setup',
    question: 'How do I get a Free Trial?',
    answer: 'You can request a 24-Hour Free Trial directly through our WhatsApp desk or by clicking the "Start Free Trial" button on this website. Our automated activation bot will dispatch your test M3U playlist and Xtream credentials within 2-5 minutes.'
  },
  {
    id: 'faq-3',
    category: 'Devices',
    question: 'Which devices and apps are supported?',
    answer: 'Streamora is compatible with all leading streaming platforms including Samsung Smart TV (Tizen), LG webOS, Amazon Firestick, Android TV & Boxes (Nvidia Shield, Chromecast), Apple TV, iPhone, iPad, Windows PC, Mac, MAG boxes, and Enigma2. You can use popular apps like IPTV Smarters Pro, TiviMate, IBO Player, and XCIPTV.'
  },
  {
    id: 'faq-4',
    category: 'Technical',
    question: 'What internet speed is recommended for 4K streaming?',
    answer: 'For standard HD streaming, a minimum internet speed of 10 Mbps is recommended. For seamless 4K Ultra HD and 60 FPS live sports, we recommend an internet connection of 25 Mbps or higher with a low-jitter connection.'
  },
  {
    id: 'faq-5',
    category: 'Billing',
    question: 'Can I order directly via WhatsApp?',
    answer: 'Yes! We offer instant WhatsApp order processing. Simply click the "Order via WhatsApp" button on any pricing card, choose your preferred payment method (Bank Transfer, JazzCash/Easypaisa, Crypto, PayPal, or Credit Card), and your account will be activated immediately.'
  },
  {
    id: 'faq-6',
    category: 'Devices',
    question: 'Can I watch on multiple devices at the same time?',
    answer: 'Yes! Depending on your chosen subscription tier (1 to 4 connections), you can watch simultaneously on different screens in your home, such as your living room TV, bedroom Firestick, and mobile phone.'
  },
  {
    id: 'faq-7',
    category: 'Billing',
    question: 'Is there a money-back guarantee?',
    answer: 'We provide a 7-day satisfaction guarantee on our standard subscriptions and a 30-day guarantee on annual packages. Before subscribing, we strongly encourage everyone to test our 24-hour free trial.'
  },
  {
    id: 'faq-8',
    category: 'Technical',
    question: 'What should I do if a stream buffers or fails to load?',
    answer: 'Our Anti-Freeze 9.4 engine dynamically reroutes packet flow. If you ever encounter buffering, simply restart your app, reboot your router, or contact our 24/7 WhatsApp support for an instant server switch or EPG refresh.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'how-to-setup-iptv-on-firestick-2026-guide',
    title: 'How to Set Up IPTV on Amazon Firestick in Under 5 Minutes (2026 Step-by-Step Guide)',
    excerpt: 'A complete beginner-friendly tutorial on installing IPTV Smarters and TiviMate on any Amazon Fire TV Stick with zero buffering settings.',
    category: 'Device Guides',
    readTime: '5 min read',
    date: 'March 18, 2026',
    author: 'Streamora Tech Team',
    content: [
      'The Amazon Firestick remains the undisputed champion of streaming hardware due to its high-performance hardware decoder and wide app availability.',
      'To get started, navigate to your Firestick Settings > My Fire TV > Developer Options and enable "Install Unknown Apps" for Downloader.',
      'Launch Downloader, enter the quick code for IPTV Smarters Pro or TiviMate, and download the verified package.',
      'Once installed, select Xtream Codes API, enter the server URL and credentials received from Streamora on WhatsApp, and click Add User.',
      'Pro tip: Enable Hardware Acceleration in TiviMate settings (Settings > Playback > Video Decoder > Hardware) for ultra-fluid 60fps sports.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'best-smart-tv-apps-samsung-lg-iptv',
    title: 'The Best IPTV Apps for Samsung Tizen & LG webOS Smart TVs',
    excerpt: 'We benchmarked IBO Player, Smart IPTV, and Smarters Player to see which delivers the smoothest 4K playback and fastest EPG loading.',
    category: 'Streaming Tips',
    readTime: '6 min read',
    date: 'March 10, 2026',
    author: 'Elena Rostova',
    content: [
      'Modern Smart TVs from Samsung and LG come with native app stores containing purpose-built IPTV players.',
      'IBO Player has emerged as the clear winner for 2026, offering 1.2-second channel zapping speed, built-in subtitles engine, and parental protection pin codes.',
      'Pairing your TV with Streamora takes less than 3 minutes: simply send your MAC address to our WhatsApp support and your playlist syncs remotely over the cloud.',
      'Ensure your Smart TV is connected via a 5GHz Wi-Fi band or direct Ethernet cable to maintain stable bitrates above 20 Mbps during live sports events.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'eliminating-iptv-buffering-anti-freeze-cdn',
    title: 'Why IPTV Buffering Happens and How Streamora Anti-Freeze 9.4 Solves It',
    excerpt: 'An inside look at video packet routing, ISP throttling, and how modern multi-edge CDN architecture guarantees smooth 4K streams.',
    category: 'Technology',
    readTime: '7 min read',
    date: 'February 26, 2026',
    author: 'Tariq Al-Mansoor',
    content: [
      'Nothing ruins a football championship match like the dreaded spinning buffering wheel in the 89th minute.',
      'Traditional cheap IPTV resellers purchase bandwidth from single-origin web hosts that congest when thousands of users tune into the same game simultaneously.',
      'Streamora operates a distributed mesh of over 120 global edge CDN nodes. When you request a stream, your connection automatically routes to the closest physical server with lowest ping.',
      'Furthermore, our Anti-Freeze 9.4 protocol uses dynamic HLS adaptive bitrate chunks that smoothly throttle buffer sizes without dropping frame rates.'
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    name: 'David Harrington',
    country: 'United Kingdom',
    role: 'Sports Enthusiast & Tech Reviewer',
    quote: 'Streamora completely replaced my overpriced satellite subscription. The 4K sports feed for the Premier League is buttery smooth at 60fps with zero lag. Ordered through WhatsApp and was watching within 4 minutes.',
    rating: 5,
    plan: '12 Months Ultimate'
  },
  {
    id: 'test-2',
    name: 'Ahmed Tariq',
    country: 'UAE / Dubai',
    role: 'Home Cinema Owner',
    quote: 'Customer support on WhatsApp is unmatched. They helped me configure TiviMate on my Nvidia Shield and uploaded the EPG guide instantly. The picture clarity on my 75-inch OLED is breathtaking.',
    rating: 5,
    plan: '12 Months Ultimate'
  },
  {
    id: 'test-3',
    name: 'Sarah Jenkins',
    country: 'Canada',
    role: 'Verified Customer',
    quote: 'I was hesitant about IPTV until I tried Streamora\'s 24-hour free trial. No card required upfront, instant setup, and all channels were crystal clear. Immediately upgraded to the 6-month family package.',
    rating: 5,
    plan: '6 Months Premium'
  }
];
