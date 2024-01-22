import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import dompurify from "dompurify";

import { TQuestion } from "../types/faqData";

import chevron from "../assets/icons8-chevron-30.png";

export const Question = ({ question }: { question: TQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null!);

  const location = useLocation();
  const idFromUrl = location.hash.slice(1);

  useEffect(() => {
    question.id.toString() === idFromUrl ? setIsOpen(true) : setIsOpen(false);
  }, [idFromUrl, question.id]);

  const handleOpening = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

  return (
    <li className="question-li" id={question.id.toString()}>
      <div>
        <button
          onClick={handleOpening}
          className={`question ${isOpen ? "open" : "closed"}`}
        >
          {question.title}
          <img
            width={20}
            height={20}
            src={chevron}
            alt="chevron icon"
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.5s ease",
            }}
          />
        </button>
        <div
          className="answer"
          ref={parentRef}
          style={
            isOpen
              ? {
                  height: parentRef?.current?.scrollHeight + 10 + "px",
                }
              : { height: "0px" }
          }
          dangerouslySetInnerHTML={{
            __html: dompurify.sanitize(question.content),
          }}
        />
      </div>
    </li>
  );
};
