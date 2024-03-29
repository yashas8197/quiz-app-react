import { useState } from "react";

export default function App() {
  const [questionNum, setQuestionNum] = useState(0);
  const [answer, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (questionNum < questions.length) {
      setQuestionNum(questionNum + 1);
    }
    if (questionNum === questions.length) {
      setFormSubmitted(true);
    }
  };

  const onChangeHandler = (questionId, option) => {
    setAnswers({ ...answer, [questionId]: option });
    if (questions[questionId - 1].correctAnswer === option) {
      if (score < questions.length) {
        setScore(score + 1);
      }
    }
  };

  const Questions = () => {
    return (
      <div>
        {!formSubmitted && questionNum < questions.length ? (
          <form onSubmit={handleFormSubmit}>
            <div>
              <p>{questions[questionNum].question}</p>
              <ul>
                {questions[questionNum].options.map((option, index) => {
                  return (
                    <li key={`${questions[questionNum].id}-${index}`}>
                      <input
                        type="radio"
                        value={option}
                        name={questions[questionNum].id}
                        onChange={() =>
                          onChangeHandler(questions[questionNum].id, option)
                        }
                        checked={
                          answer[questions[questionNum].correctAnswer] ===
                          option
                        }
                      />
                      {option}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button type="submit">Next</button>
          </form>
        ) : (
          <div>
            <p>Your Score: {score}/3</p>
          </div>
        )}
      </div>
    );
  };
  return (
    <main>
      <h1>Quiz App</h1>

      <Questions />
    </main>
  );
}
