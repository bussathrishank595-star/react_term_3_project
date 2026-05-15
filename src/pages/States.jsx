import React, { useState } from 'react';
import { statesData } from '../data/statesData';
import StateCard from '../components/StateCard';
import SearchBar from '../components/SearchBar';

const States = ({ favorites, toggleFavorite }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = statesData.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4">
          Explore All States
        </h1>
        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Discover the unique beauty, culture, and heritage of every Indian state.
        </p>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredStates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStates.map(state => (
            <StateCard 
              key={state.id} 
              state={state} 
              isFavorite={favorites.includes(state.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🏜️</div>
          <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">No states found</h3>
          <p className="text-slate-500 dark:text-slate-400">
            Try adjusting your search query.
          </p>
        </div>
      )}
    </div>
  );
};

export default States;
