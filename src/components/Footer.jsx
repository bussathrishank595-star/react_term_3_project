import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-12 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-500 dark:text-slate-400 text-center flex items-center gap-1.5">
          Made with <span className="text-red-500 text-sm leading-none">❤️</span> for Incredible India
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} India Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
