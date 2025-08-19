import React, { useState } from 'react';
import { quizCategories, difficultyLevels } from '../data/quizData';
import './CategorySelection.css';

const CategorySelection = ({ onStartQuiz }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      onStartQuiz(selectedCategory, selectedDifficulty);
    }
  };

  return (
    <div className="category-selection">
      <h2>Choose Your Quiz</h2>
      
      <div className="selection-section">
        <h3>Select a Category</h3>
        <div className="categories-grid">
          {Object.entries(quizCategories).map(([key, category]) => (
            <div
              key={key}
              className={`category-card ${selectedCategory === key ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              <div className="category-icon">{category.icon}</div>
              <h4>{category.name}</h4>
              <p>{category.questions.length} questions</p>
            </div>
          ))}
        </div>
      </div>

      <div className="selection-section">
        <h3>Select Difficulty</h3>
        <div className="difficulty-grid">
          {Object.entries(difficultyLevels).map(([key, level]) => (
            <div
              key={key}
              className={`difficulty-card ${selectedDifficulty === key ? 'selected' : ''}`}
              onClick={() => setSelectedDifficulty(key)}
            >
              <h4>{level.name}</h4>
              <p>{level.timeLimit} seconds per question</p>
              <p>{level.points} points per correct answer</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="start-quiz-btn"
        onClick={handleStartQuiz}
        disabled={!selectedCategory || !selectedDifficulty}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default CategorySelection;
