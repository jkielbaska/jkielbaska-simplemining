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
