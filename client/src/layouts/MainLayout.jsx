import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BadgeModal from '../components/BadgeModal';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0F19] text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BadgeModal />
    </div>
  );
}
