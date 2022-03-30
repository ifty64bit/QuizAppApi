import { Router, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { User } from '../models/User';
import config from '../config';

const login = Router();

interface IParams {
  email: string,
  password: string,
};

interface IUser extends IParams {
  _id: string,
  username: string,
}

login.post('/', (req: Request, res: Response) => {
  const { email, password }: IParams = req.body;
  User.findOne({ email: email, password: password }, (err: Error, user: IUser) => {
    if (err) {
      res.send(err);
    }
    else if (!user) {
      res.send("User Not Found");
    }
    else {
      const token = sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
      res.send({token: token});
    }
  });
})

export default login;