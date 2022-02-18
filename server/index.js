const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routesHandler = require("./routes/handler.js");
const { json } = require("express");
const app = express();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/", routesHandler);
app.listen(process.env.PORT, () => {
  console.log("API is running on http://localhost:" + process.env.PORT);
});
