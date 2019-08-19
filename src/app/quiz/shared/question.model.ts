export interface Answer {
  text: string;
  extraText?: string;
  correct: boolean;
}

export interface Question {
  answers: Answer[];
  text: string;
}
