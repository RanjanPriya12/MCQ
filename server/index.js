const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
const questionRouter = require("./routes/question.route");
const userRouter = require("./routes/users.routes");
const trailRouter = require("./routes/trail.route");
const resultRouter = require("./routes/result.router");
const connectDB = require("./configs/db");

//To allow requests from client
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://127.0.0.1:3000",
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
//configure cors
app.use(cors(corsOptions));
app.use(cookieParser());

//configure express to receive form data from client
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//dotEnv Configuration
dotEnv.config({ path: "./.env" });

//router configuration

app.use("/api/users", userRouter);
app.use("/api/question", questionRouter);
app.use("/api/trails", trailRouter);
app.use("/api/result", resultRouter);



app.get("/", (req, res) => {
  res.send(`<h2>Welcome to Our Quiz App</h2>`);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});


const port = process.env.PORT;
app.listen(port, async() => {
    try {
        await connectDB();
    } catch (error) {
        console.log("err",error);
    }
  console.log(`Express Server is runnning at :  http://localhost:${port}`);
});
