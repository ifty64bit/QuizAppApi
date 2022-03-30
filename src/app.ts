import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';

//import routes
import login from './login';
import signup from './signup';
import quiz from './quiz';
import students from './students';

const app:Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
})

//set route
app.use('/login', login);
app.use('/signup', signup);
app.use('/quiz', quiz);
app.use('/students', students);

app.listen(8080, () => {
  console.log('Server Running At 8080');
  mongoose.connect('mongodb+srv://user1:whoami@cluster0.dpkfg.mongodb.net/quiz', () => {
    console.log("Connected To DB");
  });
})