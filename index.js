const express = require("express");
require("./config");
const product = require("./product");
const app = express();

app.use(express.json());

app.get("/get/", async (req, resp) => {
  let data = await product.find(req.body);
  resp.send(data);
});

app.get("/Search/:key", async (req, resp) => {
  console.log("req.params", req.params.key);
  let data = await product.find({
    "$or": [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      // { price: { $regex: req.params.key } },  // what hav i done wrong here it is showing issue 
      { category: { $regex: req.params.key } }
    ],
  });
  resp.send(data);
});

app.post("/post", (req, resp) => {
  let data = new product(req.body);
  let result = data.save();
  console.log("req", req.body);
  resp.send("Yes, its working now");
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log("req.params", req.params);
  // let data =req.params
  let data = await product.deleteOne(req.params);
  resp.send(data);
});
app.put("/put/:_id", async (req, resp) => {
  let mydata = req.params;
  let data = await product.updateOne(mydata, {
    $set: req.body,
  });
  resp.send(data);
});

app.listen(5000);
