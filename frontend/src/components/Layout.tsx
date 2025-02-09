import React from 'react';
import { useState } from 'react';
import SideBar from './SideBar';
import { useLocation } from 'react-router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {location.pathname !== '/' && <>
      
        <SideBar
            isMobileMenuOpen={isMobileMenuOpen}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode} />
        {/* Main content */}
        <div className="md:ml-64 p-4">
          {children}
        </div>
      </>}

      {location.pathname === '/' && children}

    </div>
  );
}