export interface Group {
  id: number;
  columnType: "left" | "right";
  name: string;
}

export interface Question {
  id: number;
  groupId: number;
  title: string;
  content: string;
}

export interface FaqData {
  groups: {
    left: Group[];
    right: Group[];
  };
  questions: Question[];
}

export interface GrouppedFaqData {
  [key: string]: {
    name: string;
    questions: Question[];
  };
}
