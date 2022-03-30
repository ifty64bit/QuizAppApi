import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { IQuiz } from '../types';

export default async (req: Request, res: Response) => {
  const quiz: IQuiz = req.body;
  const newQuiz = new Quiz({
    title: quiz.title,
    description: quiz.description,
    questions: [...quiz.questions],
    createdBy: quiz.createdBy,
    status: quiz.status
  });
  
  try {
    const result = await newQuiz.save();
    return res.send(result);
  }
  catch (err: any) {
    return res.send(err);
  }
}