import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';

export default async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const result = await Quiz.findByIdAndDelete(id);
    return res.send(result);
  }
  catch (err: any) {
    return res.send(err);
  }
}