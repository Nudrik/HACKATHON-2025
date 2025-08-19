import React, { useState, useEffect } from 'react';
import { quizCategories, difficultyLevels } from '../data/quizData';
import './Quiz.css';

const Quiz = ({ category, difficulty, onFinishQuiz }) => {
  const questions = quizCategories[category].questions;
  const difficultySettings = difficultyLevels[difficulty];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(difficultySettings.timeLimit);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (!isAnswered && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleTimeUp();
    }
  }, [timeLeft, isAnswered]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setShowResult(true);
    const answerData = {
      question: currentQuestion.question,
      selectedAnswer: null,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: false,
      timeUsed: difficultySettings.timeLimit
    };
    setUserAnswers([...userAnswers, answerData]);
  };

  const handleAnswerSelect = (answer) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setShowResult(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + difficultySettings.points);
    }
    
    const timeUsed = difficultySettings.timeLimit - timeLeft;
    const answerData = {
      question: currentQuestion.question,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: isCorrect,
      timeUsed: timeUsed
    };
    setUserAnswers([...userAnswers, answerData]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(difficultySettings.timeLimit);
      setIsAnswered(false);
    } else {
      onFinishQuiz(score, questions.length, userAnswers);
    }
  };

  const getTimerColor = () => {
    const percentage = (timeLeft / difficultySettings.timeLimit) * 100;
    if (percentage <= 20) return '#ff4757';
    if (percentage <= 50) return '#ffa502';
    return '#2ed573';
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{quizCategories[category].name} Quiz</h2>
        <div className="quiz-info">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span className="score">Score: {score}</span>
        </div>
      </div>

      <div className="timer-container">
        <div className="timer-bar">
          <div 
            className="timer-fill"
            style={{ 
              width: `${(timeLeft / difficultySettings.timeLimit) * 100}%`,
              backgroundColor: getTimerColor()
            }}
          />
        </div>
        <div className="timer-text">
          Time left: {timeLeft}s
        </div>
      </div>

      <div className="question-container">
        <h3 className="question-text">{currentQuestion.question}</h3>
        
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === option ? 'selected' : ''
              } ${
                showResult ? 
                  option === currentQuestion.correctAnswer ? 'correct' : 
                  selectedAnswer === option ? 'incorrect' : '' : ''
              }`}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="result-feedback">
            <div className="answer-result">
              {userAnswers[userAnswers.length - 1]?.isCorrect ? (
                <span className="correct-text">✅ Correct!</span>
              ) : (
                <span className="incorrect-text">❌ Incorrect</span>
              )}
            </div>
            <div className="explanation">
              <strong>Explanation:</strong> {currentQuestion.explanation}
            </div>
            <button className="next-btn" onClick={handleNextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
