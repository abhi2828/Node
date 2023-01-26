const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/e-com";
mongoose.connect(URL);

let productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const savedInDB = async () => {
  let productsModel = mongoose.model("products", productSchema);
  let data = new productsModel({
    name: "s23",
    price: 100000,
    brand: "samsung",
    category: "mobile",
  });
  let result = await data.save();
  console.log("result", result);
};
savedInDB();

const updateInDB = async () => {
  let productsModel = mongoose.model("products", productSchema);
  let data = await productsModel.updateOne({name: "s23"},{
    $set:{name: "s23 ultra"}
  })
  console.log("result", data);
};
// updateInDB();

const deleteInDB = async () => {
  let productsModel = mongoose.model("products", productSchema);
  let data = await productsModel.deleteMany({name: "s23"})
  console.log("result", data);
};
// deleteInDB();
