export interface Channel {
  id: string;
  name: string;
  category: 'Sports' | 'News' | 'Entertainment' | 'Cinema' | 'Kids' | 'Documentary' | 'International';
  currentShow: string;
  nextShow: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  bitrate: string;
  language: string;
  isLive: boolean;
  viewers: number;
}

export interface SportsEvent {
  id: string;
  sport: 'Football' | 'Basketball' | 'Tennis' | 'Cricket' | 'Motorsports';
  tournament: string;
  match: string;
  status: 'Live' | 'Upcoming' | 'Finished';
  time: string;
  score?: string;
  streamQuality: '4K HDR' | 'FHD 60FPS';
  stadium?: string;
  channelName: string;
}

export interface MovieItem {
  id: string;
  title: string;
  genre: string;
  year: number;
  duration: string;
  rating: number;
  quality: '4K HDR' | 'Dolby Vision' | 'FHD';
  audio: string;
  synopsis: string;
  cast: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  durationMonths: number;
  price: number;
  originalPrice: number;
  monthlyEquivalent: number;
  connections: number;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  recommendedFor: string;
}

export interface DeviceGuide {
  id: string;
  name: string;
  category: 'Smart TV' | 'Streaming Stick' | 'Mobile & Tablet' | 'PC & Mac' | 'IPTV Box';
  compatibleApps: string[];
  difficulty: 'Easy' | 'Intermediate';
  setupTime: string;
  steps: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Setup' | 'Billing' | 'Technical' | 'Devices';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}
