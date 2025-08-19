import React from 'react';
import './Results.css';

const Results = ({ score, totalQuestions, userAnswers, onRestart, onRestartSameQuiz }) => {
  const percentage = Math.round((score / (totalQuestions * 20)) * 100);
  const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
  
  const getPerformanceMessage = () => {
    const percentage = (correctAnswers / totalQuestions) * 100;
    if (percentage >= 80) return "Excellent! 🎉";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Not bad! 📚";
    return "Keep practicing! 💪";
  };

  const getPerformanceColor = () => {
    const percentage = (correctAnswers / totalQuestions) * 100;
    if (percentage >= 80) return "#2ed573";
    if (percentage >= 60) return "#ffa502";
    if (percentage >= 40) return "#ff6348";
    return "#ff4757";
  };

  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      
      <div className="score-summary">
        <div className="score-circle" style={{ borderColor: getPerformanceColor() }}>
          <div className="score-text">
            <span className="score-number">{correctAnswers}/{totalQuestions}</span>
            <span className="score-label">Correct</span>
          </div>
        </div>
        
        <div className="score-details">
          <h3 style={{ color: getPerformanceColor() }}>{getPerformanceMessage()}</h3>
          <p>Total Score: <strong>{score} points</strong></p>
          <p>Accuracy: <strong>{Math.round((correctAnswers / totalQuestions) * 100)}%</strong></p>
        </div>
      </div>

      <div className="answers-review">
        <h3>Review Your Answers</h3>
        {userAnswers.map((answer, index) => (
          <div key={index} className="answer-review-item">
            <div className="question-number">Question {index + 1}</div>
            <div className="question-text">{answer.question}</div>
            <div className={`answer-comparison ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
              <div>
                <strong>Your answer:</strong> {answer.selectedAnswer || "No answer"}
              </div>
              {!answer.isCorrect && (
                <div>
                  <strong>Correct answer:</strong> {answer.correctAnswer}
                </div>
              )}
              <div>
                <strong>Time used:</strong> {answer.timeUsed}s
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="results-actions">
        <button className="restart-btn" onClick={onRestartSameQuiz}>
          Restart Same Quiz
        </button>
        <button className="restart-btn" onClick={onRestart} style={{ marginLeft: '10px', backgroundColor: '#6c757d' }}>
          Try Another Quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
