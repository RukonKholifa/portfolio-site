import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, Clock, Zap, Star, ShieldCheck } from 'lucide-react';
import { Service, PricingTier } from '@/src/types';
import { cn } from '@/src/lib/utils';

const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'YouTube Content Mastery',
    subtitle: 'FOR CREATORS & VLOGGERS',
    description: 'Retention-focused editing designed to keep your audience hooked from the first second to the last.',
    turnaround: '48-72 Hours',
    included: [
      'Advanced Motion Graphics',
      'Sound Design & SFX',
      'Color Grading',
      'Thumbnail Design Assistance',
      'Subtitles & Captions',
      'Copyright-free Music'
    ],
    pricing: {
      starter: {
        title: 'Starter',
        price: '৳ 5,000',
        features: ['Up to 10 min raw footage', 'Basic color correction', '1 Revision', '72h Delivery']
      },
      pro: {
        title: 'Pro',
        price: '৳ 12,000',
        features: ['Up to 30 min raw footage', 'Advanced motion graphics', 'Unlimited Revisions', '48h Delivery', 'Custom Sound Design'],
        isPopular: true
      },
      premium: {
        title: 'Premium',
        price: '৳ 25,000',
        features: ['Unlimited raw footage', 'Full cinematic treatment', 'Priority Support', '24h Delivery', 'Social Media Cuts']
      }
    }
  },
  {
    id: '2',
    title: 'Commercial Ads & Promos',
    subtitle: 'FOR BRANDS & BUSINESSES',
    description: 'High-impact promotional videos that communicate your brand values and drive conversions.',
    turnaround: '3-5 Days',
    included: [
      'Storyboarding Support',
      'Premium Stock Footage',
      'Professional Voiceover',
      'Brand Identity Integration',
      'Multi-platform Optimization',
      'Commercial Licensing'
    ],
    pricing: {
      starter: {
        title: 'Basic Ad',
        price: '৳ 15,000',
        features: ['15-30 sec duration', 'Basic brand integration', '2 Revisions', '5 Days Delivery']
      },
      pro: {
        title: 'Brand Story',
        price: '৳ 35,000',
        features: ['60-90 sec duration', 'Full brand storytelling', 'Unlimited Revisions', '3 Days Delivery', 'Professional VO'],
        isPopular: true
      },
      premium: {
        title: 'Campaign Plus',
        price: '৳ 70,000',
        features: ['Full video campaign', '3 different variations', 'Social media kit', 'Priority Delivery', 'Premium Stock']
      }
    }
  },
  {
    id: '3',
    title: 'Cinematic Wedding Films',
    subtitle: 'FOR YOUR SPECIAL DAY',
    description: 'Preserving your most precious memories in a cinematic format that you will cherish forever.',
    turnaround: '2-4 Weeks',
    included: [
      'Cinematic Color Grading',
      'Emotional Soundscapes',
      'Highlight Reel (3-5 min)',
      'Full Ceremony Edit',
      'Drone Footage Integration',
      '4K Delivery'
    ],
    pricing: {
      starter: {
        title: 'Highlight',
        price: '৳ 20,000',
        features: ['3 min highlight reel', 'Basic color grading', '1 Revision', '4 Weeks Delivery']
      },
      pro: {
        title: 'The Story',
        price: '৳ 45,000',
        features: ['5-7 min cinematic film', 'Full ceremony edit', 'Unlimited Revisions', '3 Weeks Delivery', 'Drone integration'],
        isPopular: true
      },
      premium: {
        title: 'Legacy',
        price: '৳ 85,000',
        features: ['10-15 min feature film', 'Full day coverage edit', 'Priority Delivery', '2 Weeks Delivery', 'Raw footage drive']
      }
    }
  },
  {
    id: '4',
    title: 'Instagram Reels & TikToks',
    subtitle: 'FOR SOCIAL MEDIA GROWTH',
    description: 'Dynamic, fast-paced vertical edits optimized for social media algorithms and maximum engagement.',
    turnaround: '24-48 Hours',
    included: [
      'Trending Audio Sync',
      'Dynamic Subtitles',
      'Fast-paced Transitions',
      'Visual Effects (VFX)',
      'Color Enhancement',
      'Platform Optimization'
    ],
    pricing: {
      starter: {
        title: 'Basic Reel',
        price: '৳ 1,500',
        features: ['Up to 30 sec edit', 'Basic captions', '1 Revision', '48h Delivery']
      },
      pro: {
        title: 'Viral Edit',
        price: '৳ 3,000',
        features: ['Up to 60 sec edit', 'Dynamic motion captions', 'Unlimited Revisions', '24h Delivery', 'Trending SFX'],
        isPopular: true
      },
      premium: {
        title: 'Pro Creator',
        price: '৳ 5,000',
        features: ['Up to 90 sec edit', 'Advanced VFX & Tracking', 'Priority Support', '12h Delivery', 'A/B Hook Variations']
      }
    }
  }
];

interface ServiceAccordionProps {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ service, isOpen, onToggle }) => {
  return (
    <div className={cn(
      "mb-6 transition-all duration-500",
      isOpen ? "glass-card-gold" : "glass-card hover:border-gold/30"
    )}>
      {/* Collapsed Header */}
      <button 
        onClick={onToggle}
        className="w-full p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left"
      >
        <div className="flex items-start gap-6">
          <div className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
            isOpen ? "bg-gold text-deep-bg" : "bg-gold/10 text-gold"
          )}>
            <Zap size={32} />
          </div>
          <div>
            <span className="subtitle-caps">{service.subtitle}</span>
            <h3 className="text-2xl md:text-3xl font-serif mt-1">{service.title}</h3>
            <p className="text-white/50 mt-2 max-w-xl line-clamp-1">{service.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center gap-2 text-gold/60">
            <Clock size={16} />
            <span className="text-xs uppercase tracking-widest font-semibold">{service.turnaround}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 border-t border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                {/* Left Side: Included */}
                <div className="lg:col-span-4">
                  <h4 className="font-serif text-xl mb-6 flex items-center gap-2">
                    <ShieldCheck className="text-gold" size={20} />
                    What's Included
                  </h4>
                  <ul className="space-y-4">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <Check className="text-gold" size={12} />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10 p-6 rounded-xl bg-gold/5 border border-gold/10">
                    <p className="text-xs text-gold/60 uppercase tracking-widest leading-relaxed">
                      "My goal is to provide a seamless experience from raw footage to a polished cinematic masterpiece."
                    </p>
                  </div>
                </div>

                {/* Right Side: Pricing */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {(Object.values(service.pricing) as PricingTier[]).map((tier, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "relative p-6 rounded-2xl border transition-all duration-500 flex flex-col",
                          tier.isPopular 
                            ? "bg-white/10 border-gold shadow-[0_0_30px_rgba(201,168,76,0.15)] scale-105 z-10" 
                            : "bg-white/5 border-white/10 hover:border-white/20"
                        )}
                      >
                        {tier.isPopular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-deep-bg text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Popular
                          </div>
                        )}
                        <h5 className="text-sm uppercase tracking-widest text-white/40 mb-2">{tier.title}</h5>
                        <div className="text-2xl font-serif text-gold mb-6">{tier.price}</div>
                        
                        <ul className="space-y-3 mb-8 flex-grow">
                          {tier.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-2 text-[11px] text-white/60">
                              <Check className="text-gold shrink-0" size={12} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className={cn(
                          "w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                          tier.isPopular ? "bg-gold text-deep-bg" : "bg-white/10 text-white hover:bg-white/20"
                        )}>
                          Order Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="subtitle-caps">Services & Pricing</span>
          <h1 className="section-title">Tailored Editing Solutions</h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Choose a package that fits your needs. From quick social media edits to 
            full-scale cinematic productions, I've got you covered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {SERVICES_DATA.map((service) => (
            <ServiceAccordion 
              key={service.id} 
              service={service} 
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>

        <div className="mt-24 glass-card p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-4">Need a Custom Quote?</h2>
          <p className="text-white/60 mb-8">
            If your project doesn't fit into these packages, don't worry. 
            Contact me for a custom quote tailored to your specific requirements.
          </p>
          <a href="mailto:rukon19ahmed@gmail.com" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
