import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { Project } from '@/src/types';
import { VideoModal } from '@/src/components/ui/VideoModal';

const ALL_PROJECTS: Project[] = [
  { id: '1', title: 'Neon Nights', thumbnail: 'https://picsum.photos/seed/p1/800/450', videoUrl: 'v1', duration: '02:45', category: 'Commercial' },
  { id: '2', title: 'Sarah & James', thumbnail: 'https://picsum.photos/seed/p2/800/450', videoUrl: 'v2', duration: '05:12', category: 'Wedding' },
  { id: '3', title: 'Tokyo Streets', thumbnail: 'https://picsum.photos/seed/p3/800/450', videoUrl: 'v3', duration: '12:30', category: 'YouTube' },
  { id: '4', title: 'Product Showcase', thumbnail: 'https://picsum.photos/seed/p4/800/450', videoUrl: 'v4', duration: '01:15', category: 'Commercial' },
  { id: '5', title: 'Mountain Escape', thumbnail: 'https://picsum.photos/seed/p5/800/450', videoUrl: 'v5', duration: '03:20', category: 'YouTube' },
  { id: '6', title: 'The Proposal', thumbnail: 'https://picsum.photos/seed/p6/800/450', videoUrl: 'v6', duration: '02:10', category: 'Wedding' },
];

const CATEGORIES = ['All', 'YouTube', 'Commercial', 'Wedding'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="subtitle-caps">Portfolio</span>
          <h1 className="section-title">Visual Masterpieces</h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            A curated selection of my best work across different genres. 
            Each project is a testament to cinematic storytelling and technical precision.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                activeFilter === cat 
                ? 'bg-gold text-deep-bg shadow-[0_0_15px_rgba(201,168,76,0.3)]' 
                : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
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
          </AnimatePresence>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo?.videoUrl || ''} 
        title={selectedVideo?.title || ''} 
      />
    </main>
  );
}
