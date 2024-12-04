import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

const Layout = ({ children, showHeader = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-main flex flex-col">
      {showHeader && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;