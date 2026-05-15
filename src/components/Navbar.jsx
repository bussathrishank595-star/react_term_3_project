import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = ({ isDarkMode, toggleTheme }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <span className="text-lg">🏠</span> },
    { name: 'States', path: '/states', icon: <span className="text-lg">🗺️</span> },
    { name: 'Favorites', path: '/favorites', icon: <span className="text-lg">❤️</span> },
    { name: 'Quiz', path: '/quiz', icon: <span className="text-lg">📝</span> },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg text-white flex items-center justify-center">
                <span className="text-2xl leading-none">📍</span>
              </div>
              <span className="font-bold text-xl tracking-tight dark:text-white">
                India<span className="text-orange-500">Explorer</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <span className="text-xl leading-none">☀️</span> : <span className="text-xl leading-none">🌙</span>}
            </button>
          </div>
          
          {/* Mobile menu toggle could go here, but keeping it simple for now */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <span className="text-xl leading-none">☀️</span> : <span className="text-xl leading-none">🌙</span>}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Bar (Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
        <div className="flex justify-around items-center h-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                location.pathname === link.path
                  ? 'text-orange-500'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {link.icon}
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
