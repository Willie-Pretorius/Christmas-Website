const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersHandler = require("./routes/users_handler.js");
const gifteesHandler = require("./routes/giftees_handler.js");
const wishlistHandler = require("./routes/wishlist_handler.js");
const userGiftListsHandler = require("./routes/userGiftLists_handler");
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
app.use("/", usersHandler);
app.use("/", gifteesHandler);
app.use("/", wishlistHandler);
app.use("/", userGiftListsHandler);
app.listen(process.env.PORT, () => {
  console.log("API is running on http://localhost:" + process.env.PORT);
});
