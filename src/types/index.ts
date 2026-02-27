export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  turnaround: string;
  included: string[];
  pricing: {
    starter: PricingTier;
    pro: PricingTier;
    premium: PricingTier;
  };
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: 'YouTube' | 'Commercial' | 'Wedding';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
