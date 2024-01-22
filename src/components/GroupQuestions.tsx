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
        <div className="group-questions" key={group?.id}>
          <h2>{group?.name}</h2>

          {groupQuestions?.map((question: TQuestion) => (
            <ul className="group-questions-ul" key={question.id}>
              <Question question={question} />
            </ul>
          ))}
        </div>
      ) : null}
    </>
  );
};
