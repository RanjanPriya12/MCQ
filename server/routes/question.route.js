const express = require("express");
const { isAuthenticate, isAuthorizeRoles } = require("../middlewares/auth");
const {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/question.controller");

const router = express.Router();

router.route("/all/questions").get(getAllQuestions);
router.route("/admin/createMCQ").post(createQuestion);

router.route("/admin/updateMCQ/:id").put(updateQuestion)
router.route("/admin/deleteMCQ/:id").delete(deleteQuestion);


module.exports = router;