import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import QuizCard from '../components/QuizCard';

// Dummy quiz questions
const questions = [
  {
    id: 1,
    text: "Which state is famous for backwaters?",
    options: [
      { text: "Goa", isCorrect: false },
      { text: "Kerala", isCorrect: true },
      { text: "Maharashtra", isCorrect: false },
      { text: "Tamil Nadu", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "Where is Charminar located?",
    options: [
      { text: "Mumbai", isCorrect: false },
      { text: "New Delhi", isCorrect: false },
      { text: "Hyderabad", isCorrect: true },
      { text: "Jaipur", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "Which state celebrates Bathukamma festival?",
    options: [
      { text: "Telangana", isCorrect: true },
      { text: "Andhra Pradesh", isCorrect: false },
      { text: "Karnataka", isCorrect: false },
      { text: "Odisha", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "Which of these is known as the 'Pink City'?",
    options: [
      { text: "Jodhpur", isCorrect: false },
      { text: "Udaipur", isCorrect: false },
      { text: "Bikaner", isCorrect: false },
      { text: "Jaipur", isCorrect: true }
    ]
  },
  {
    id: 5,
    text: "Where is the Gateway of India located?",
    options: [
      { text: "Kolkata", isCorrect: false },
      { text: "Mumbai", isCorrect: true },
      { text: "Chennai", isCorrect: false },
      { text: "Kochi", isCorrect: false }
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const handleSelectAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (!isAnswerChecked) {
      // Check answer
      setIsAnswerChecked(true);
      if (questions[currentQuestion].options[selectedAnswer].isCorrect) {
        setScore(score + 1);
      }
    } else {
      // Move to next question or show result
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswerChecked(false);
      } else {
        setShowResult(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh] flex flex-col justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-4">
          Test Your Knowledge
        </h1>
        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          How well do you know Incredible India? Take this short quiz to find out!
        </p>
      </div>

      {!showResult ? (
        <div>
          <div className="max-w-2xl mx-auto mb-6 flex justify-between items-center px-4">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex gap-1">
              {questions.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-8 h-2 rounded-full ${
                    idx < currentQuestion ? 'bg-orange-500' : 
                    idx === currentQuestion ? 'bg-orange-300 dark:bg-orange-700' : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <QuizCard 
            question={questions[currentQuestion].text}
            options={questions[currentQuestion].options}
            selectedAnswer={selectedAnswer}
            onSelect={handleSelectAnswer}
            onNext={handleNext}
            isLastQuestion={currentQuestion === questions.length - 1}
            showResult={isAnswerChecked}
          />
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 max-w-2xl mx-auto text-center shadow-xl border border-slate-100 dark:border-slate-700 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
            <span className="text-5xl leading-none">🏆</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Quiz Completed!</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Here is how you did</p>
          
          <div className="text-6xl font-black text-gradient mb-8">
            {score} <span className="text-3xl text-slate-400 dark:text-slate-500">/ {questions.length}</span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 mb-8 border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              {score === questions.length ? 'Perfect Score! 🏆' : 
               score >= questions.length / 2 ? 'Great Job! 👏' : 'Keep Exploring! 🌍'}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {score === questions.length ? 'You are a true India expert.' : 
               score >= questions.length / 2 ? 'You know a lot about India.' : 'There is so much more to learn about India.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={restartQuiz}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 hover:bg-orange-50 dark:hover:border-orange-500 dark:hover:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 transition-all"
            >
              <span className="text-xl leading-none">🔄</span> Try Again
            </button>
            <Link 
              to="/states"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-white font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Explore More <span className="text-xl leading-none">➡️</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
