import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { AppImage } from '../components/ui/AppImage';
import { AppIcon } from '../components/ui/AppIcon';
import { VideoModal } from '../components/ui/VideoModal';
import { TiltCard } from '../components/ui/TiltCard';
import { Marquee } from '../components/Marquee';
import { HeroScene } from '../components/three/HeroScene';
import { Project, Testimonial } from '@/src/types';
import { Play, Star, ArrowDown } from 'lucide-react';

const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Nights — Cyberpunk Edit',
    thumbnail: 'https://picsum.photos/seed/edit1/800/450',
    videoUrl: 'https://example.com/video1',
    duration: '02:45',
    category: 'Commercial',
  },
  {
    id: '2',
    title: 'The Wedding of Sarah & James',
    thumbnail: 'https://picsum.photos/seed/edit2/800/450',
    videoUrl: 'https://example.com/video2',
    duration: '05:12',
    category: 'Wedding',
  },
  {
    id: '3',
    title: 'Vlog: Exploring Tokyo Streets',
    thumbnail: 'https://picsum.photos/seed/edit3/800/450',
    videoUrl: 'https://example.com/video3',
    duration: '12:30',
    category: 'YouTube',
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Director, Visionary Media',
    content:
      'Rukon is a master of pacing and storytelling. He transformed our raw footage into a cinematic masterpiece that exceeded all expectations.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    id: '2',
    name: 'Jessica Chen',
    role: 'Content Creator',
    content:
      'The attention to detail in sound design and color grading is what sets Rukon apart. My audience noticed the quality jump immediately.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/user2/100/100',
  },
];

const MARQUEE_ITEMS = [
  'Cinematic Color',
  'Sound Design',
  'Motion Graphics',
  'Storytelling',
  'Color Grading',
  'VFX',
  'Editing',
  'Post-Production',
];

const SERVICES = [
  {
    icon: 'Youtube',
    title: 'YouTube Content',
    desc: 'Retention-focused editing for creators who want to scale their audience.',
  },
  {
    icon: 'Video',
    title: 'Commercial Ads',
    desc: 'High-impact promotional videos designed to drive sales and brand awareness.',
  },
  {
    icon: 'Heart',
    title: 'Wedding Films',
    desc: 'Emotional storytelling that preserves your most precious memories forever.',
  },
  {
    icon: 'Instagram',
    title: 'Instagram Reels',
    desc: 'Dynamic vertical edits optimized for social media growth and engagement.',
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = React.useState<Project | null>(null);

  // Parallax for hero text/3D
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroSceneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* ─────────── HERO ─────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center px-6 pt-28 pb-20 lg:pt-24"
      >
        {/* Ambient blooms */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-[32rem] h-[32rem] bg-blue-500/10 blur-[160px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-[36rem] h-[36rem] bg-gold/15 blur-[160px] rounded-full" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Hero copy — left column */}
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start"
            >
              <motion.span
                variants={fadeUp}
                className="subtitle-caps inline-flex items-center gap-3"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                Available for new projects · Est. 2020
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-balance mb-6"
              >
                Elevating Your Vision Into{' '}
                <span className="text-gold italic">Cinematic</span>{' '}
                <span className="relative inline-block">
                  <span className="text-gold italic">Reality</span>
                  <svg
                    className="absolute -bottom-3 left-0 w-full"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <motion.path
                      d="M2 6 Q 100 0 198 5"
                      stroke="#D4AF63"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.2, duration: 1.4, ease: 'easeInOut' }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light text-pretty"
              >
                High-end post-production for creators, brands, and filmmakers.
                Storytelling that captivates and converts.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Link to="/services" className="btn-primary w-full sm:w-auto">
                  Hire Me Now
                </Link>
                <Link to="/portfolio" className="btn-outline w-full sm:w-auto">
                  View Portfolio
                </Link>
              </motion.div>

              {/* Trust row */}
              <motion.div
                variants={fadeUp}
                className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/40"
              >
                <div className="flex items-center gap-2">
                  <Star size={14} className="fill-gold text-gold" />
                  <Star size={14} className="fill-gold text-gold" />
                  <Star size={14} className="fill-gold text-gold" />
                  <Star size={14} className="fill-gold text-gold" />
                  <Star size={14} className="fill-gold text-gold" />
                  <span className="ml-2 text-[10px] uppercase tracking-[0.25em]">
                    5.0 · 200+ Reviews
                  </span>
                </div>
                <div className="hidden md:block h-4 w-px bg-white/10" />
                <div className="text-[10px] uppercase tracking-[0.25em]">
                  Trusted by 80+ creators worldwide
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3D scene — right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            style={{ y: heroSceneY }}
            className="relative lg:col-span-5 aspect-square w-full max-w-[560px] mx-auto"
          >
            {/* Glow halo */}
            <div className="absolute inset-6 bg-gold/20 blur-[100px] rounded-full" />

            {/* Glassy frame */}
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent backdrop-blur-sm">
              <HeroScene className="absolute inset-0 h-full w-full" />

              {/* Frame highlights */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
              <div className="pointer-events-none absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              {/* Floating meta chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: EASE }}
                className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-white/10 text-[10px] uppercase tracking-[0.25em] text-white/70"
              >
                <span className="text-gold">●</span> 4K · 60FPS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
                className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur border border-white/10 text-[10px] uppercase tracking-[0.25em] text-white/70"
              >
                Cinematic Grade
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────── MARQUEE ─────────── */}
      <section className="py-12 border-y border-white/5 bg-white/[0.015]">
        <Marquee items={MARQUEE_ITEMS} duration={40} />
      </section>

      {/* ─────────── ABOUT PREVIEW ─────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="subtitle-caps">The Editor</span>
            <h2 className="section-title text-4xl md:text-5xl text-balance">
              Crafting Stories That Matter
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed text-pretty">
              With over 5 years of experience in the industry, I&apos;ve worked
              with top-tier creators and brands to deliver visuals that
              don&apos;t just look good — they feel right. My process is rooted
              in understanding the core message and amplifying it through
              precise editing, sound design, and color theory.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
              <div>
                <h4 className="text-3xl md:text-4xl font-serif text-gold mb-1">
                  500+
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Projects
                </p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif text-gold mb-1">
                  50M+
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Total Views
                </p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif text-gold mb-1">
                  80+
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gold/10 blur-3xl rounded-full opacity-60" />
            <TiltCard className="group relative z-10 rounded-3xl overflow-hidden">
              <AppImage
                src="https://picsum.photos/seed/editor/800/1000"
                alt="Rukon Kholifa, professional video editor"
                aspectRatio="portrait"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-3xl pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-black/50 backdrop-blur-md px-4 py-3 border border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Available
                  </p>
                  <p className="font-serif text-lg">For new projects</p>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
                </span>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* ─────────── FEATURED WORK ─────────── */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <span className="subtitle-caps">Portfolio</span>
              <h2 className="section-title text-4xl md:text-5xl text-balance">
                Featured Works
              </h2>
            </motion.div>
            <Link
              to="/portfolio"
              className="text-gold uppercase tracking-widest text-sm font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              View All Projects <AppIcon name="ArrowRight" size={16} />
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FEATURED_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(project)}
              >
                <TiltCard
                  max={6}
                  className="relative overflow-hidden rounded-2xl aspect-video mb-4"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center pulse-play shadow-[0_0_30px_rgba(201,168,76,0.6)]">
                      <Play
                        className="text-deep-bg fill-deep-bg ml-1"
                        size={24}
                      />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-widest rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-gold/90 backdrop-blur-md text-deep-bg text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {project.duration}
                    </span>
                  </div>
                </TiltCard>
                <h3 className="font-serif text-xl group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="subtitle-caps">What I Do</span>
          <h2 className="section-title text-4xl md:text-5xl text-balance">
            Premium Editing Services
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4 text-pretty">
            From quick social edits to full cinematic productions — every
            project receives the same obsessive attention to detail.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {SERVICES.map((service, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group">
              <TiltCard
                max={6}
                className="glass-card p-8 h-full transition-colors duration-500 group-hover:border-gold/40"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                  <AppIcon
                    name={service.icon as any}
                    size={28}
                    className="group-hover:text-deep-bg transition-colors duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-white/50 leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="text-gold text-xs font-semibold uppercase tracking-widest link-underline"
                >
                  Learn More
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/services" className="btn-primary">
            Explore All Packages
          </Link>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="subtitle-caps">The Process</span>
            <h2 className="section-title text-4xl md:text-5xl text-balance">
              From Raw Footage to Final Cut
            </h2>
          </div>

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                n: '01',
                title: 'Discovery',
                desc: 'We discuss your vision, audience, and goals to align on the creative direction.',
              },
              {
                n: '02',
                title: 'Editing',
                desc: 'I assemble the story — pacing, structure, and rhythm crafted for impact.',
              },
              {
                n: '03',
                title: 'Polish',
                desc: 'Color grading, sound design, motion graphics and VFX bring it to life.',
              },
              {
                n: '04',
                title: 'Delivery',
                desc: 'Final review, revisions, and delivery in formats optimized for every platform.',
              },
            ].map((step) => (
              <motion.li
                key={step.n}
                variants={fadeUp}
                className="relative glass-card p-8 group"
              >
                <span className="font-serif text-6xl text-gold/20 group-hover:text-gold/60 transition-colors duration-500">
                  {step.n}
                </span>
                <h3 className="font-serif text-2xl mt-4 mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="subtitle-caps">Testimonials</span>
            <h2 className="section-title text-4xl md:text-5xl text-balance">
              Client Experiences
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.id} variants={fadeUp}>
                <TiltCard max={4} className="glass-card p-10 relative h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-xl font-serif italic mb-8 leading-relaxed text-white/85">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border border-gold/20"
                    />
                    <div>
                      <h4 className="font-bold text-sm">{t.name}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-widest">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 opacity-5 pointer-events-none">
                    <AppIcon name="Quote" size={60} />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-gold/20 p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-blue-500/5 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/20 rounded-full blur-[120px] pointer-events-none" />

          <span className="subtitle-caps relative">Let&apos;s Create</span>
          <h2 className="section-title text-balance relative">
            Have a story worth telling?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 relative text-pretty">
            Whether it&apos;s a brand campaign, a wedding film, or your next
            viral edit — let&apos;s craft something unforgettable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <a href="mailto:rukon19ahmed@gmail.com" className="btn-primary">
              Start a Project
            </a>
            <Link to="/portfolio" className="btn-outline">
              See My Work
            </Link>
          </div>
        </motion.div>
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
