import { useState } from "react";
import "./styles.css";
const questions = [
  {
    id: 1,
    question: "what language is react based on?",
    answer: "Javascript",
  },
  {
    id: 2,
    question: "what language is react based on?",
    answer: "Javascript",
  },
  {
    id: 3,
    question: "what language is react based on?",
    answer: "Javascript",
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedID] = useState(null);
  function handleClick(id) {
    setSelectedID(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
