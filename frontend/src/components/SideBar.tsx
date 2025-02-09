import React from 'react';
import { LayoutDashboard, LineChart, Vote, Brain, History, Settings } from 'lucide-react';
import { useState } from 'react';
import { WalletAdvancedDefault } from '@coinbase/onchainkit/wallet';
import Navbar from './Navbar';

interface MenuItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    path: string;
};

const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: LineChart, label: 'AI Insights', path: '/insights' },
    { icon: Vote, label: 'Governance', path: '/governance' },
    { icon: Brain, label: 'Market Trends', path: '/trends' },
    { icon: History, label: 'History', path: '/history' },
    { icon: Settings, label: 'Settings', path: '/settings' },
];


interface SideBarProps extends React.HTMLAttributes<HTMLDivElement>  {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.FC<SideBarProps> = ({
    isDarkMode,
    setIsDarkMode,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    className,
}) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item.path);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${className}`}>
            <div className={`h-full px-3 py-4 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r border-gray-200 dark:border-gray-700`}>
                <Navbar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    toggleMobileMenu={toggleMobileMenu}
                    className='hidden sm:block'
                />
                <ul className="space-y-2">
                    <li>
                        <WalletAdvancedDefault />
                    </li>
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                onClick={() => handleItemClick(item)}
                                className={`flex items-center p-2 rounded-lg ${isDarkMode
                                    ? 'text-gray-300 hover:bg-gray-700'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    } ${activeItem === item.path ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;