import { Schema,model } from 'mongoose';

const QuestionSchema = new Schema({
  question: String,
  options: [String],
  answer: String
});

export const Question = model('Question', QuestionSchema);