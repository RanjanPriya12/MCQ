const jwt = require("jsonwebtoken");
const cookieService = require("../services/cookies");
const User = require("../models/users.model");
const catchAsyncError = require("./error");
const ErrorHandle = require("../utils/errorHandle");

exports.isAuthenticate = async (request, response, next) => {
  let token = cookieService.getCookie("token", {
    req: request,
    res: response,
  });
  if (!token) {
    return response
      .status(401)
      .json({ msg: "No Token Provided , Authentication Denied" });
  }
  try {
    let decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    request.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    response.status(500).json({ msg: "Invalid Token" });
  }
};

exports.isAuthorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandle(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};