import { useState, useMemo } from "react";
import { FaqData } from "../types/faqData";

export const useFilteredFaq = (faqData: FaqData) => {
  const [query, setQuery] = useState<string>("");

  const filteredFaqQuestions = useMemo(() => {
    if (!query) {
      return faqData?.questions;
    }
    const queryWords = query.toLowerCase().split(" ");

    return faqData?.questions.filter((item) => {
      const itemWords = (item.title + " " + item.content).toLowerCase();
      return queryWords.every((word) => itemWords.includes(word));
    });
  }, [query, faqData]);

  return {
    filteredFaqQuestions,
    query,
    setQuery,
  };
};
