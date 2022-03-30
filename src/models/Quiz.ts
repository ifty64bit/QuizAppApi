import { Schema, model } from 'mongoose';
import { Question } from './Question';

const QuizSchema = new Schema({
  title: String,
  description: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String
    }
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
  }
});

export const Quiz = model('Quiz', QuizSchema);