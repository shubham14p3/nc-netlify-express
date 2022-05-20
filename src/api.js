const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
var cors = require("cors");

const app = express();
const router = express.Router();
app.use(cors());
dotenv.config({
  path: "D:/Company Work/Nise-Comport/ns-db-men/server" + "/config.env",
}); 
// router.get("/", (req, res) => {
//   res.json({
//     hello: "hi!"
//   });
// });
app.use(express.json());
const mongodb = require("./db/conn");

mongodb(); // Connecting DB

const routerLocal="./router/auth";
app.use(`"/.netlify/functions"+${routerLocal}`, router);

module.exports = app;
module.exports.handler = serverless(app);
