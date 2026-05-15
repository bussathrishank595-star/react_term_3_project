import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-10 group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <span className="text-lg opacity-50 group-focus-within:opacity-100 transition-opacity leading-none">🔍</span>
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl leading-5 bg-transparent placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all shadow-sm focus:shadow-md dark:text-slate-200"
        placeholder="Search for states by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
