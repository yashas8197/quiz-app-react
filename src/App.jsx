import { useState } from "react";
import "./App.css";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState("");
  const [score, setScore] = useState(0);
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
  ];

  const QuizApp = () => {
    const clickHandler = () => {
      setCurrentQuestion(currentQuestion + 1);
      if (questions[currentQuestion].correctAnswer === selectedOptions) {
        setScore(score + 1);
      }
      setSelectedOptions(" ");
    };

    const onChangeHandler = (event) => {
      let { value } = event.target;

      setSelectedOptions(value);
    };

    return (
      <div>
        <h1>Quiz App</h1>
        {currentQuestion < questions.length ? (
          <>
            <h2>Question {questions[currentQuestion].id}</h2>
            <p>{questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => {
                return (
                  <li key={index}>
                    <input
                      type="radio"
                      value={option}
                      name={`question${questions[currentQuestion].id}`}
                      onChange={onChangeHandler}
                    />{" "}
                    {option}
                  </li>
                );
              })}
            </ul>

            <button onClick={() => clickHandler()}>Next</button>
          </>
        ) : (
          <>
            <h2>Quiz Result</h2>
            <p>
              Your score: {score}/{questions.length}{" "}
            </p>
          </>
        )}
      </div>
    );
  };
  return (
    <main>
      <QuizApp />
    </main>
  );
}
