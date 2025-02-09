import React from 'react';
import { useNavigate } from 'react-router';
import { Sun, Moon, Menu } from 'lucide-react';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    isDarkMode,
    setIsDarkMode,
    toggleMobileMenu,
    className,
}) => {
    const navigate = useNavigate();

    return (
        <nav className={`w-full px-5 pt-2 flex flex-row items-center justify-between ${className}`}>
            <button className='flex items-center space-x-2' onClick={() => navigate('/')}>
                <img src="/logo.png" alt="PelicanTrade" className="w-8 h-8" />
                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>PelicanTrade</h1>
            </button>
            <div className='flex flex-row items-center space-x-2'>
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                    {isDarkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>
                <button
                    onClick={toggleMobileMenu}
                    className="rounded-lg text-white sm:hidden"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;