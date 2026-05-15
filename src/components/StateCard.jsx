import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const StateCard = ({ state, isFavorite, toggleFavorite }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={state.image} 
          alt={state.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-3 right-3 z-10">
          <FavoriteButton 
            isFavorite={isFavorite} 
            onClick={() => toggleFavorite(state.id)} 
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{state.name}</h3>
          <div className="flex items-center text-slate-200 text-sm">
            <span className="mr-1 leading-none">📍</span>
            <span>{state.capital}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">
          {state.description}
        </p>
        <Link 
          to={`/state/${state.id}`}
          className="inline-block w-full text-center bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 text-orange-600 dark:text-orange-400 font-medium py-2 px-4 rounded-xl transition-colors"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default StateCard;
