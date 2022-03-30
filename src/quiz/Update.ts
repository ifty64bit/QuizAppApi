import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { IQuiz } from '../types';

export default async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const quiz: IQuiz = req.body;
  const updatedQuiz = {
    result: "Updated Successfully",
    title: quiz.title,
    description: quiz.description,
    questions: [...quiz.questions],
    createdBy: quiz.createdBy,
    status: quiz.status
  };
  
  try {
    const result = await Quiz.findByIdAndUpdate(id, updatedQuiz, { new: true });
    return res.send(result);
  }
  catch (err: any) {
    return res.send(err);
  }
}