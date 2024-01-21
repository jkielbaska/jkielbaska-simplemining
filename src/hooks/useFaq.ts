import { FaqData } from "../types/faqData";
import { getFaqData } from "../services/api";
import { useEffect, useState } from "react";

export const useFaq = () => {
  const [faqData, setFaqData] = useState<FaqData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null | unknown>(null);

  const fetchFaqData = async () => {
    setIsLoading(true);
    try {
      const data = await getFaqData();
      setFaqData(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  return {
    faqData,
    isLoading,
    error,
  };
};

// const groupFaqData = (faqData: FaqData | null) => {
//   const grouppedData: { left: GrouppedFaqData; right: GrouppedFaqData } = {
//     left: {},
//     right: {},
//   };

//   faqData?.questions.forEach((question) => {
//     const group =
//       faqData.groups.left.find((group) => group.id === question.groupId) ||
//       faqData.groups.right.find((group) => group.id === question.groupId);

//     if (group) {
//       if (!grouppedData[group.columnType][question.groupId]) {
//         grouppedData[group.columnType][question.groupId] = {
//           name: group.name,
//           questions: [],
//         };
//       }

//       grouppedData[group.columnType][question.groupId].questions.push(
//         question
//       );
//     }
//   });
//   return grouppedData;
// };
// const grouppedFaqData = groupFaqData(faqData);
// console.log(grouppedFaqData);
