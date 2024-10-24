const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const productSchema = new Schema({
  title: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  description: String,
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
});

// Model
exports.Product = mongoose.model("Product", productSchema);
// ekhon ei model er upor crud operation korbo, but save hobe database e, ba database theke read hobe. amake database e jaite hobena
