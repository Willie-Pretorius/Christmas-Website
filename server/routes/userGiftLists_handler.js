const express = require("express");
const routes = express();
const { Users, Giftees } = require("../Mongoose/Schemas");

routes.post("/userGiftLists", async (req, res) => {
  const id = req.body.id.string;
  console.log("userGiftLists Triggered");
  const userId = await Users.findOne({ ObjectId: { _id: id } }).exec();
  console.log(userId);
  Giftees.find({ user: userId._id }, async (err, db) => {
    if (err) {
      console.log(err);
    } else if (db) {
      const list = [];
      db.forEach((item) => {
        list.push({
          name: item.name,
          surname: item.surname,
          wishes: item.wishes,
        });
      });
      response = {
        response: 200,
        list: list,
      };
      res.send(response);
      console.log(response);
    }
  });
});

module.exports = routes;
