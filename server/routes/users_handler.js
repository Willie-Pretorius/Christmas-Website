const express = require("express");
const routes = express();
const { Users, Giftees } = require("../Mongoose/Schemas");

//Login Page
routes.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Users.findOne({ username: username }, (err, db) => {
    res.send({
      token: JSON.stringify(db._id),
      username: username,
    });
    console.log("successful login");
  });
});

routes.post("/Register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  console.log(email);
  const user = new Users({
    username: username,
    password: password,
    email: email,
  });
  Users.findOne({ username: username }, (err, db) => {
    if (!db) {
      user.save((err) => {
        if (err) {
          console.log(err);
        } else {
          const response = {
            response: "Successfully Registered",
            username: username,
          };
          console.log(response);
          res.send(response);
        }
      });
    } else {
      res.send({ response: "username has been taken" });
      console.log({ response: "username has been taken" });
    }
  });
});

module.exports = routes;
