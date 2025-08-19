import React, { useState } from 'react';
import './App.css';
import CategorySelection from './components/CategorySelection';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  const [gameState, setGameState] = useState('category'); // 'category', 'quiz', 'results'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = (category, difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setGameState('quiz');
  };

  const finishQuiz = (score, total, answers) => {
    setFinalScore(score);
    setTotalQuestions(total);
    setUserAnswers(answers);
    setGameState('results');
  };

  const restartQuiz = () => {
    setGameState('category');
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setFinalScore(0);
    setTotalQuestions(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎯 Quiz Master</h1>
        <p>Test your knowledge with interactive quizzes!</p>
      </header>

      <main className="App-main">
        {gameState === 'category' && (
          <CategorySelection onStartQuiz={startQuiz} />
        )}
        
        {gameState === 'quiz' && (
          <Quiz
            category={selectedCategory}
            difficulty={selectedDifficulty}
            onFinishQuiz={finishQuiz}
          />
        )}
        
        {gameState === 'results' && (
          <Results
            score={finalScore}
            totalQuestions={totalQuestions}
            userAnswers={userAnswers}
            onRestart={restartQuiz}
          />
        )}
      </main>
    </div>
  );
}

export default App;
