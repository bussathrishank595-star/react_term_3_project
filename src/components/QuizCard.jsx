import React from 'react';

const QuizCard = ({ question, options, selectedAnswer, onSelect, onNext, isLastQuestion, showResult }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-700 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
        {question}
      </h3>
      
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && onSelect(index)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 font-medium
              ${
                showResult
                  ? option.isCorrect
                    ? 'bg-green-50 border-green-500 text-green-700 dark:bg-green-900/30 dark:border-green-500 dark:text-green-400'
                    : selectedAnswer === index && !option.isCorrect
                    ? 'bg-red-50 border-red-500 text-red-700 dark:bg-red-900/30 dark:border-red-500 dark:text-red-400'
                    : 'bg-slate-50 border-slate-200 text-slate-500 dark:bg-slate-700/50 dark:border-slate-600 dark:text-slate-400'
                  : selectedAnswer === index
                  ? 'bg-orange-50 border-orange-500 text-orange-700 dark:bg-orange-900/30 dark:border-orange-500 dark:text-orange-400 shadow-md transform scale-[1.01]'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-orange-300 hover:bg-orange-50/50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:border-orange-500/50'
              }
            `}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={selectedAnswer === null && !showResult}
          className={`px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 shadow-md ${
            selectedAnswer === null && !showResult
              ? 'bg-slate-300 dark:bg-slate-600 cursor-not-allowed opacity-70'
              : 'bg-gradient-primary hover:shadow-lg hover:-translate-y-1'
          }`}
        >
          {showResult ? (isLastQuestion ? 'See Results' : 'Next Question') : 'Check Answer'}
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
