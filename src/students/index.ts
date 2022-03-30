import { Router } from 'express';
import Attend from './Attend';
import Submit from './Submit';

const students = Router();

students.get('/attend/:quizID', Attend);
students.post('/submit', Submit);

export default students;