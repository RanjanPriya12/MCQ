const express = require("express");
const {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/question.controller");
const { isAuthenticate, isAuthorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.route("/all/questions").get(getAllQuestions);
router.route("/admin/createMCQ").post(isAuthenticate, isAuthorizeRoles("admin"), createQuestion);

router.route("/admin/updateMCQ/:id").put(isAuthenticate, isAuthorizeRoles("admin"), updateQuestion)
router.route("/admin/deleteMCQ/:id").delete(isAuthenticate, isAuthorizeRoles("admin"), deleteQuestion);


module.exports = router;