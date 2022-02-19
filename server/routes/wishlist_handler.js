const express = require("express");
const routes = express();
const { Users, Giftees } = require("../Mongoose/Schemas");

routes.post("/myWishlist", (req, res) => {
  const object = req.body.id;
  const giftee_id = object.string;
  console.log("myWishlist Triggered");
  const giftee_name = "";
  const giftee_wishlist = [];
  Giftees.find({ _id: giftee_id }, async (err, db) => {
    if (err) {
      console.log(err);
    } else if (db) {
      response = await {
        name: db[0].name,
        surname: db[0].surname,
        wishes: db[0].wishes,
      };
      res.send(response);
      console.log(response);
    }
  });
});

routes.post("/addWish", (req, res) => {
  wish = req.body.wish;
  giftee_id = req.body.id;
  console.log(giftee_id);
  Giftees.findOneAndUpdate(
    { _id: giftee_id },
    { $push: { wishes: wish } },
    async (err, db) => {
      if (err) {
        console.log(err);
      } else if (db) {
        Giftees.find({ _id: giftee_id }, async (err, db) => {
          if (db) {
            response = await {
              name: db[0].name,
              surname: db[0].surname,
              wishes: db[0].wishes,
            };
            res.send(response);
            console.log(response);
          }
        });
      }
    }
  );
});

module.exports = routes;
