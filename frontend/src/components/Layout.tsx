import React from 'react';
import { useState } from 'react';
import SideBar from './SideBar';
import { useLocation } from 'react-router';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {location.pathname !== '/' && <>
        <Navbar
          className='absolute top-0 left-0 !z-1000 sm:hidden'
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <SideBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode} />
        {/* Main content */}
        <div className="md:ml-64 p-4 z-10 pt-20 sm:pt-10">
          {children}
        </div>
      </>}

      {location.pathname === '/' && children}

    </div>
  );
}