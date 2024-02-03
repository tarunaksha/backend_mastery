const express = require("express");
const userRouter = require("./routes/user");
const connectMongoDb = require("./connection");
const app = express();
const PORT = 8000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRouter);

connectMongoDb("mongodb://127.0.0.1:27017/first-rest-app");

app.listen(PORT, () => {
  console.log("server is running on port 8000");
})
