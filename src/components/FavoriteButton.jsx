import React from 'react';

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevent navigating if wrapped in a link somehow
        onClick();
      }}
      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm flex items-center justify-center ${
        isFavorite 
          ? 'bg-red-50 dark:bg-red-900/30 scale-110' 
          : 'bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 hover:scale-105'
      }`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <span className="text-xl leading-none">{isFavorite ? '❤️' : '🤍'}</span>
    </button>
  );
};

export default FavoriteButton;
