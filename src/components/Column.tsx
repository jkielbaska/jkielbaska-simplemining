import { TQuestion, TGroup } from "../types/faqData";
import { GroupQuestions } from "./GroupQuestions";

export const Column = ({
  groups,
  questions,
}: {
  groups: TGroup[] | undefined;
  questions: TQuestion[] | undefined;
}) => {
  const filterQuestions = (group: TGroup, questions: TQuestion[] | undefined) =>
    questions ? questions.filter((el) => el.groupId === group.id) : [];

  return (
    <div className="column">
      {groups?.map((group) => (
        <GroupQuestions
          group={group}
          key={group.id}
          groupQuestions={filterQuestions(group, questions)}
        />
      ))}
    </div>
  );
};
// groupQuestions={filterQuestions(group, questions).filter((el) => {
//   return query.toLowerCase() === ""
//     ? el
//     : el.title.toLowerCase().includes(query.toLowerCase());
// })}

// groupQuestions={filterQuestions(group, questions).filter((el) =>
//   keys.some((key) =>
//     el[key].toLowerCase().includes(query.toLowerCase())
//   )
// )}
