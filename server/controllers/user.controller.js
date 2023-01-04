const catchAsyncError = require("../middlewares/error");
const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandle");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
   name,
    email,
    password,
  });

  return res
    .status(201)
    .json({ success: true, message: "Account Created Successfully" });
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Your email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  console.log(user,res)
  sendToken(user, 200, res);


    let payload = {
      user: {
        id: user.id,
        name: user.name,
      },
      iat: Math.floor(Date.now() / 1000) - 30,
      // exp:  Math.floor(Date.now() / 1000) + 60 * 60 *3
      exp: Math.floor(Date.now() / 1000) + 60 * 5,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY);

    const refreshToken = jwt.sign(
      {
        user: {
          id: user.id,
          name: user.name,
        },
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const role =userRole.name 

    response.set("Access-Control-Allow-Origin", request.headers.origin); //req.headers.origin
    response.set("Access-Control-Allow-Credentials", "true");
    // access-control-expose-headers allows JS in the browser to see headers other than the default 7
    response.set(
      "Access-Control-Expose-Headers",
      "date, etag, access-control-allow-origin, access-control-allow-credentials"
    );
   
    cookieService.setCookie("token", refreshToken, {

      req: request,
      res: response,
    });
   cookieService.setCookie("userRole", role, {
      req: request,
      res: response,
    });
    response.status(200).json({
      msg: "Login is Successful",
      user: { ...user._doc, role: userRole.name },
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ errors: [{ msg: error.message }] });
  }
  
});

exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});