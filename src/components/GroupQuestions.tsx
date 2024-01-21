import { TQuestion, TGroup } from "../types/faqData";
import { Question } from "./Question";

export const GroupQuestions = ({
  group,
  groupQuestions,
}: {
  group?: TGroup;
  groupQuestions?: TQuestion[];
}) => {
  return (
    <>
      {groupQuestions?.length ? (
        <div>
          <h2>{group?.name}</h2>
          {groupQuestions?.map((question: TQuestion) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      ) : null}
    </>
  );
};
