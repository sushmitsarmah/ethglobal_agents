import React from 'react';
import { useState } from 'react';
import SideBar from './SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <SideBar
        isMobileMenuOpen={isMobileMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode} />

      {/* Main content */}
      <div className="md:ml-64 p-4">
        {children}
      </div>
    </div>
  );
}