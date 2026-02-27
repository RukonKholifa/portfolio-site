import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AppImage } from '../components/ui/AppImage';
import { AppIcon } from '../components/ui/AppIcon';
import { VideoModal } from '../components/ui/VideoModal';
import { Project, Testimonial } from '@/src/types';
import { Play, Star } from 'lucide-react';

const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Nights - Cyberpunk Edit',
    thumbnail: 'https://picsum.photos/seed/edit1/800/450',
    videoUrl: 'https://example.com/video1',
    duration: '02:45',
    category: 'Commercial'
  },
  {
    id: '2',
    title: 'The Wedding of Sarah & James',
    thumbnail: 'https://picsum.photos/seed/edit2/800/450',
    videoUrl: 'https://example.com/video2',
    duration: '05:12',
    category: 'Wedding'
  },
  {
    id: '3',
    title: 'Vlog: Exploring Tokyo Streets',
    thumbnail: 'https://picsum.photos/seed/edit3/800/450',
    videoUrl: 'https://example.com/video3',
    duration: '12:30',
    category: 'YouTube'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Director, Visionary Media',
    content: 'Rukon is a master of pacing and storytelling. He transformed our raw footage into a cinematic masterpiece that exceeded all expectations.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: '2',
    name: 'Jessica Chen',
    role: 'Content Creator',
    content: 'The attention to detail in sound design and color grading is what sets Rukon apart. My audience noticed the quality jump immediately.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/user2/100/100'
  }
];

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = React.useState<Project | null>(null);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="subtitle-caps">Professional Video Editor</span>
            <h1 className="section-title leading-tight">
              Elevating Your Vision Into <br />
              <span className="text-gold italic">Cinematic Reality</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              High-end post-production for creators, brands, and filmmakers. 
              Specializing in storytelling that captivates and converts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/services" className="btn-primary w-full sm:w-auto">
                Hire Me Now
              </Link>
              <Link to="/portfolio" className="btn-outline w-full sm:w-auto">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={el => revealRefs.current[0] = el}
            className="reveal"
          >
            <span className="subtitle-caps">The Editor</span>
            <h2 className="section-title text-4xl md:text-5xl">Crafting Stories That Matter</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              With over 5 years of experience in the industry, I've worked with top-tier creators and brands to deliver visuals that don't just look good—they feel right. My process is rooted in understanding the core message and amplifying it through precise editing, sound design, and color theory.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-gold mb-1">500+</h4>
                <p className="text-xs uppercase tracking-widest text-white/40">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-gold mb-1">50M+</h4>
                <p className="text-xs uppercase tracking-widest text-white/40">Total Views</p>
              </div>
            </div>
          </div>
          <div 
            ref={el => revealRefs.current[1] = el}
            className="reveal relative"
          >
            <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-full opacity-50" />
            <AppImage 
              src="https://picsum.photos/seed/editor/800/1000" 
              alt="Rukon Kholifa" 
              aspectRatio="portrait"
              className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div 
              ref={el => revealRefs.current[2] = el}
              className="reveal"
            >
              <span className="subtitle-caps">Portfolio</span>
              <h2 className="section-title text-4xl md:text-5xl">Featured Works</h2>
            </div>
            <Link 
              to="/portfolio" 
              className="text-gold uppercase tracking-widest text-sm font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              View All Projects <AppIcon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(project)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video mb-4">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center pulse-play">
                      <Play className="text-deep-bg fill-deep-bg ml-1" size={24} />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-widest rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-gold/80 backdrop-blur-md text-deep-bg text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {project.duration}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl group-hover:text-gold transition-colors">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="subtitle-caps">What I Do</span>
          <h2 className="section-title text-4xl md:text-5xl">Premium Editing Services</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: 'Youtube', title: 'YouTube Content', desc: 'Retention-focused editing for creators who want to scale their audience.' },
            { icon: 'Video', title: 'Commercial Ads', desc: 'High-impact promotional videos designed to drive sales and brand awareness.' },
            { icon: 'Heart', title: 'Wedding Films', desc: 'Emotional storytelling that preserves your most precious memories forever.' },
            { icon: 'Instagram', title: 'Instagram Reels', desc: 'Dynamic vertical edits optimized for social media growth and engagement.' }
          ].map((service, idx) => (
            <div 
              key={idx}
              className="glass-card p-10 hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-deep-bg transition-all duration-500">
                <AppIcon name={service.icon as any} size={32} className="group-hover:text-deep-bg" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="text-gold text-sm font-semibold uppercase tracking-widest hover:underline">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-primary">
            Explore All Packages
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="subtitle-caps">Testimonials</span>
            <h2 className="section-title text-4xl md:text-5xl">Client Experiences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-10 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-xl font-serif italic mb-8 leading-relaxed text-white/80">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gold/20" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <div className="absolute top-10 right-10 opacity-5">
                  <AppIcon name="Quote" size={60} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo?.videoUrl || ''} 
        title={selectedVideo?.title || ''} 
      />
    </main>
  );
}
