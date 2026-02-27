import React from 'react';
import { AppLogo } from './ui/AppLogo';
import { AppIcon } from './ui/AppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-bg border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <AppLogo />
          <p className="text-white/50 max-w-xs leading-relaxed">
            Crafting cinematic experiences through professional video editing. Transforming your vision into high-end visual stories.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/rukon_kholifa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <AppIcon name="Instagram" size={18} />
            </a>
            <a href="https://youtube.com/@rukon_kholifa2?si=ymPoG8e-4zxn5KGZ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <AppIcon name="Youtube" size={18} />
            </a>
            <a href="https://www.facebook.com/mdrukon.kholifa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <AppIcon name="Facebook" size={18} />
            </a>
            <a href="https://x.com/Rukon__Kholifa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <AppIcon name="Twitter" size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="/portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
            <li><a href="/services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            <li className="flex items-center gap-3">
              <AppIcon name="Mail" size={18} />
              <a href="mailto:rukon19ahmed@gmail.com" className="hover:text-gold transition-colors">rukon19ahmed@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <AppIcon name="Phone" size={18} />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <AppIcon name="MapPin" size={18} />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs tracking-widest uppercase">
        <p>© 2026 Rukon Kholifa Editz. All Rights Reserved.</p>
        <p>Designed for Cinematic Excellence</p>
      </div>
    </footer>
  );
};
