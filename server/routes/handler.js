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
//MyAccount Page
routes.post("/addgiftee", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const surname = req.body.surname;
  const wishCount = req.body.wishCount;
  const sampleWishes = [
    "Your wishes will appear here.",
    "<-- Press X to delete a wish from the list.",
  ];
  Giftees.findOne({ name: name }, async (err, db) => {
    if (db) {
      console.log("giftee already exists");
      res.send({ response: name + " " + surname + " already exists." });
    } else {
      const userId = await Users.findOne({ username: username }).exec();
      const giftee = new Giftees({
        name: name,
        surname: surname,
        wishcount: wishCount,
        wishes: sampleWishes,
        user: userId._id,
      });
      console.log("Getting ready to save.");
      const list = [];
      giftee.save(async (err) => {
        if (err) {
          console.log(err);
        } else {
          Giftees.find({ user: userId._id }, (err, db) => {
            db.forEach((element) => {
              list.push({
                name: element.name,
                surname: element.surname,
                URL: "http://localhost:4000/myWishlist/:" + element._id,
              });
            });
            console.log(list);
            console.log("Giftee successfully saved");
            res.send({
              response: name + " " + surname + " was successfully saved",
              list,
            });
          });
        }
      });
    }
  });
});
routes.post("/fetchgiftee", async (req, res) => {
  const list = [];
  const username = req.body.username;
  const userId = await Users.findOne({ username: username }).exec();
  Giftees.find({ user: userId._id }, (err, db) => {
    db.forEach((element) => {
      list.push({
        name: element.name,
        surname: element.surname,
        URL: "http://localhost:4000/myWishlist/:" + element._id,
      });
    });
    console.log(list);
    console.log("Giftee successfully saved");
    res.send({
      response: "",
      list,
    });
  });
});
module.exports = routes;
