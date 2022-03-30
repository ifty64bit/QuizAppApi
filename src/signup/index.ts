import { Router } from 'express';
import { User } from '../models/User';

const signup = Router();

signup.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username: username,
    email: email,
    password: password
  });
  try {
    await user.save();
    res.send("Signup Successfull");
  }
  catch (err:any) {
    if (err?.code === 11000) {
      res.status(400).send("User Already Exists");
      return;
    }
    res.send(err);
  }
})

export default signup;