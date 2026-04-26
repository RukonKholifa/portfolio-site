import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { SpotlightCursor } from '../components/SpotlightCursor';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-deep-bg">
      {/* Cinematic background layers */}
      <div className="grain-overlay" aria-hidden />
      <SpotlightCursor />

      <Header />
      <div className="relative z-10 flex-grow">
        {children}
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};
