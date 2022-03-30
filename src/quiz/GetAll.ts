import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';
import { User } from '../models/User';

export default async (req: Request, res: Response) => {
  const username:string = req.params.username;
  try {
    const user = await User.findOne({username: username});
    const result = await Quiz.find({createdBy:user._id});
    return res.json(result);
  }
  catch (err: any) {
    return res.send(err);
  }
}