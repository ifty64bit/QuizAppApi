import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { User } from '../models/User';
import { IQuiz } from '../types';

export default async (req: Request, res: Response) => {
  const params = req.params;
  console.log(req.params);
  try {
    const user = await User.findOne({username: params.username});
    const result = await Quiz.findOne({ $and: [{ _id: params.quizId }, { createdBy: user._id }] });
    return res.json(result);
  }
  catch (err: any) {
    return res.send(err);
  }
}