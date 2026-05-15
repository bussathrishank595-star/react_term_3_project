import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { statesData } from '../data/statesData';
import FavoriteButton from '../components/FavoriteButton';

const StateDetails = ({ favorites, toggleFavorite }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const state = statesData.find(s => s.id === id);

  // Scroll to top when loading a new state
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">State not found</h2>
        <button 
          onClick={() => navigate('/states')}
          className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-2"
        >
          <span className="text-xl leading-none">⬅️</span> Back to States
        </button>
      </div>
    );
  }

  const isFavorite = favorites.includes(state.id);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={state.image} 
          alt={state.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="absolute top-6 left-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all shadow-sm"
          >
            <span className="text-2xl leading-none">⬅️</span>
          </button>
        </div>

        <div className="absolute top-6 right-6">
          <FavoriteButton 
            isFavorite={isFavorite} 
            onClick={() => toggleFavorite(state.id)} 
          />
        </div>

        <div className="absolute bottom-10 left-6 right-6 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-lg">
            {state.name}
          </h1>
          <div className="flex items-center text-slate-200 text-lg font-medium drop-shadow-md">
            <span className="text-xl leading-none mr-2">📍</span>
            Capital: {state.capital}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 dark:border-slate-700">
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 font-light">
            {state.description}
          </p>

          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-orange-500 rounded-full inline-block"></span>
            Key Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Famous Place */}
            <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <span className="text-3xl leading-none">🖼️</span>
              </div>
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Famous Place</h4>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{state.famousPlace}</p>
            </div>

            {/* Food */}
            <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-800/50 rounded-full flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                <span className="text-3xl leading-none">🍽️</span>
              </div>
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Must Try Food</h4>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{state.food}</p>
            </div>

            {/* Festival */}
            <div className="p-6 rounded-2xl bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-900/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-800/50 rounded-full flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
                <span className="text-3xl leading-none">📅</span>
              </div>
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Major Festival</h4>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{state.festival}</p>
            </div>

            {/* Language */}
            <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 lg:col-start-1 lg:col-span-1">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-800/50 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                <span className="text-3xl leading-none">💬</span>
              </div>
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Local Language</h4>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{state.language}</p>
            </div>

            {/* Best Season */}
            <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 lg:col-span-2">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                <span className="text-3xl leading-none">☀️</span>
              </div>
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Best Time to Visit</h4>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{state.bestSeason}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetails;
