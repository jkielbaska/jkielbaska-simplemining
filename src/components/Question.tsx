import dompurify from "dompurify";
import { TQuestion } from "../types/faqData";

export const Question = ({ question }: { question: TQuestion }) => {
  return (
    <div>
      <p>{question.title}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(question.content),
        }}
      />
    </div>
  );
};
