const {Schema} = require("mongoose");

const ModelSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});
