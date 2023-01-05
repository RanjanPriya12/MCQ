const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    options: { type: [String], required: true },
    correctOption : { type: [String], required: true },
    marks:{type:Number, default:5}
  },
  { timestamps: true }
);

const Question = new mongoose.model("questions", QuestionSchema);
module.exports = Question;