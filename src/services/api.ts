import axios from "axios";
import { FaqData } from "../types/faqData";

export const getFaqData = async (): Promise<FaqData> => {
  const { data } = await axios.get<FaqData>(
    "https://gist.githubusercontent.com/tadz/14c1106b7408943b7c7de9ade37f8308/raw/18b206e852987baf80b25008c7712e111fae7409/02-faq.json"
  );
  return data;
};
