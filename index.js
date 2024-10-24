require("dotenv").config();

const mongoose = require("mongoose");
const cors = require('cors')

// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL
  );
  console.log("database connected");
}

const express = require("express");
const server = express();
const path = require('path');

const productRouter = require("./routes/product");

//bodyParser
server.use(cors())
server.use(express.json());

server.use("/products", productRouter.router);
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


server.listen(process.env.API_PORT, () => {
  console.log("server started");
});
