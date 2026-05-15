import React from 'react';
import { Link } from 'react-router-dom';


import { statesData } from '../data/statesData';
import StateCard from '../components/StateCard';

const Favorites = ({ favorites, toggleFavorite }) => {
  const favoriteStates = statesData.filter(state => favorites.includes(state.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-3">
          <span className="text-4xl leading-none">❤️</span> My Favorites
        </h1>
        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Your personalized collection of incredible destinations across India.
        </p>
      </div>

      {favoriteStates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteStates.map(state => (
            <StateCard 
              key={state.id} 
              state={state} 
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-sm border border-slate-100 dark:border-slate-700 mt-10">
          <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl leading-none">🤍</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4">
            No favorites yet
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
            Start exploring and add some beautiful destinations to your bucket list!
          </p>
          <Link 
            to="/states" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-white font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-xl leading-none">🧭</span> Explore Destinations
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
