export interface TGroup {
  id: number;
  columnType: "left" | "right";
  name: string;
}

export interface TQuestion {
  id: number;
  groupId: number;
  title: string;
  content: string;
}

export interface FaqData {
  groups: {
    left: TGroup[];
    right: TGroup[];
  };
  questions: TQuestion[];
}
