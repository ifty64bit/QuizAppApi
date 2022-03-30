import { Router, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import GetAll from './GetAll';
import GetByID from './GetByID';
import config from '../config';

const quiz = Router();

quiz.use(async (req: Request, res: Response, next: Function) => {
  const token: string = req.header('Authorization')!;
  try
  {
    const decode = verify(token, config.jwtSecret);
    console.log('Request Received');
    console.log(decode);
    next();
  }
  catch (err: any)
  {
    res.send(err?.message);
  }
  
 });

quiz.get('/allQuiz/:username', GetAll);
quiz.get('/byId/:username/:quizId', GetByID);
quiz.post('/create', Create);
quiz.put('/:id', Update);
quiz.delete('/:id', Delete);

export default quiz;