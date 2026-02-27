import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};
