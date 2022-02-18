const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  password: String,
  email: String,
});

const GifteeSchema = Schema({
  name: String,
  surname: String,
  wishcount: Number,
  wishes: Array,
  user: { type: Schema.Types.ObjectId, ref: "users" },
});

const Users = mongoose.model("users", UserSchema, "users");
const Giftees = mongoose.model("giftees", GifteeSchema, "giftees");

const Models = { Users: Users, Giftees: Giftees };

module.exports = Models;
