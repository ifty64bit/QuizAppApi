export type QuizQuestion = {
  id?: string;
  question: string;
  options: string[];
  answer: string;
}

export interface IQuiz {
  id?: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  createdBy: string;
  status: string;
}[];