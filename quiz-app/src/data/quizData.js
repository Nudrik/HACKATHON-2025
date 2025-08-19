export const quizCategories = {
  science: {
    name: "Science",
    icon: "🔬",
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au",
        explanation: "Au comes from the Latin word 'aurum' meaning gold."
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        id: 3,
        question: "What is the speed of light in vacuum?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
        correctAnswer: "299,792,458 m/s",
        explanation: "The exact speed of light in vacuum is 299,792,458 meters per second."
      }
    ]
  },
  history: {
    name: "History",
    icon: "📜",
    questions: [
      {
        id: 4,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: "1945",
        explanation: "World War II ended on September 2, 1945 with Japan's surrender."
      },
      {
        id: 5,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswer: "George Washington",
        explanation: "George Washington served as the first U.S. President from 1789 to 1797."
      },
      {
        id: 6,
        question: "Which ancient wonder of the world still stands today?",
        options: ["Colossus of Rhodes", "Hanging Gardens", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
        correctAnswer: "Great Pyramid of Giza",
        explanation: "The Great Pyramid of Giza is the only surviving ancient wonder."
      }
    ]
  },
  geography: {
    name: "Geography",
    icon: "🌍",
    questions: [
      {
        id: 7,
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correctAnswer: "Tokyo",
        explanation: "Tokyo has been Japan's capital since 1868."
      },
      {
        id: 8,
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
        explanation: "The Pacific Ocean covers about 63 million square miles."
      },
      {
        id: 9,
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "The seven continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
      }
    ]
  },
  technology: {
    name: "Technology",
    icon: "💻",
    questions: [
      {
        id: 10,
        question: "Who founded Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        correctAnswer: "Bill Gates",
        explanation: "Bill Gates founded Microsoft with Paul Allen in 1975."
      },
      {
        id: 11,
        question: "What does 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Home Tool Transfer Protocol", "HyperText Translation Protocol"],
        correctAnswer: "HyperText Transfer Protocol",
        explanation: "HTTP is the foundation of data communication for the World Wide Web."
      },
      {
        id: 12,
        question: "In which year was the iPhone first released?",
        options: ["2005", "2006", "2007", "2008"],
        correctAnswer: "2007",
        explanation: "The first iPhone was released on June 29, 2007."
      }
    ]
  }
};

export const difficultyLevels = {
  easy: {
    name: "Easy",
    timeLimit: 30,
    points: 10
  },
  medium: {
    name: "Medium",
    timeLimit: 20,
    points: 15
  },
  hard: {
    name: "Hard",
    timeLimit: 10,
    points: 20
  }
};
