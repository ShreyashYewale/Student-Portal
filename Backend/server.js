const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 3001;

// DB Connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch(() => {
    console.log("MongoDB Connected Unsuccessfully!");
  });

// Importing Routes
const CollegeAdmin = require("./Routes/CollegeAdmin");
const Faculty = require("./Routes/Faculty");
const Student = require("./Routes/Student");
const Classes = require("./Routes/Classes");

// Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
// // Setting Routes
app.use("/admin", CollegeAdmin);
app.use("/faculty", Faculty);
app.use("/student", Student);
app.use("/classes", Classes);

// Base Route
app.get("/", (req, res) => {
  console.log("Request Handled!");
  res.json({ msg: `API Listening on port: ${PORT}` });
});

// Starting Server
app.listen(PORT, () => {
  console.log(`API Listening on port: ${PORT}`);
});
