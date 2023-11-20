let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");

const dotenv = require('dotenv');
dotenv.config()

app.listen(8080,()=>{
  console.log("Listening on port ", 8080);
});

