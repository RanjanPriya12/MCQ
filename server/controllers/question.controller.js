const Question = require("../models/question.model");
const ErrorHandler = require("../utils/errorHandle");
const catchAsyncError = require("../middlewares/error");

//create Question --Admin
exports.createQuestion = catchAsyncError(async (req, res, next) => {

  const question = await Question.create(req.body);
  res.status(201).json({
    success: true,
    question,
  });
});

//Get Questions
exports.getAllQuestions = catchAsyncError(async (req, res) => {
  

  const questions = await Question.find({}).lean().exec();
  res.status(200).json({ success: true, questions });
});


//update Question -- admin
exports.updateQuestion = catchAsyncError(async (req, res, next) => {
  let question = await Question.findById(req.params.id);
  if (!question) {
    return next(new ErrorHandler("Question Not Found", 404));
  }

  question = await Question.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, Question });
});

//Delete Question -- admin
exports.deleteQuestion = catchAsyncError(async (req, res, next) => {
  const question = await Question.findById(req.params.id);

  if (!question) {
    return next(new ErrorHandler("Question Not Found", 404));
  }
  await Question.remove();
  res.status(200).json({
    success: true,
    message: "Question delete successfully",
  });
});


