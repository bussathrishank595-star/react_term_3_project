import React from 'react';
import { Link } from 'react-router-dom';

import { statesData } from '../data/statesData';
import StateCard from '../components/StateCard';

const Home = ({ favorites, toggleFavorite }) => {
  // Display only top 3 states on home page
  const featuredStates = statesData.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-3xl mx-4 mt-4 shadow-2xl">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Taj Mahal, India" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-6">
            <span className="text-base leading-none">🧭</span>
            <span className="text-sm font-medium tracking-wider uppercase">Discover the magic</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Incredible <span className="text-orange-500">India</span> Explorer
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light drop-shadow">
            Journey through diverse cultures, breathtaking landscapes, and rich heritage of the world's most vibrant country.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/states" 
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 transform hover:-translate-y-1"
            >
              Explore States <span className="text-xl leading-none">➡️</span>
            </Link>
            <Link 
              to="/quiz" 
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Featured States Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Destinations
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Start your journey with these handpicked destinations showcasing the best of what India has to offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStates.map(state => (
            <StateCard 
              key={state.id} 
              state={state} 
              isFavorite={favorites.includes(state.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/states" 
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
          >
            View All States <span className="text-xl leading-none">➡️</span>
          </Link>
        </div>
      </section>
      
      {/* Quick Facts Section */}
      <section className="bg-slate-100 dark:bg-slate-800/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="text-5xl font-black text-gradient mb-4">28</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">States</h3>
              <p className="text-slate-500 dark:text-slate-400">Each with its own unique culture, language, and traditions.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="text-5xl font-black text-gradient mb-4">8</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Union Territories</h3>
              <p className="text-slate-500 dark:text-slate-400">Directly governed by the Central Government of India.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="text-5xl font-black text-gradient mb-4">40+</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">UNESCO Sites</h3>
              <p className="text-slate-500 dark:text-slate-400">World Heritage Sites showcasing remarkable history and nature.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
