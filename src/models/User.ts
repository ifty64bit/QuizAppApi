import { Schema,model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },

});

export const User = model('User', UserSchema);