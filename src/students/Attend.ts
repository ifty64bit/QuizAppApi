import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { IQuiz } from '../types';

export default async (req: Request, res: Response) => {
  const quizID = req.params.quizID;
  try {
    const quiz = await Quiz.findById({ _id: quizID });
    res.send(quiz);
  }
  catch (err: any) {
    return res.send(err);
  }
}