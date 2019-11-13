const express = require("express");
const app = express();
const port = 4000;

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const AdvertisementRouter = require("./product/router");
app.use(AdvertisementRouter);

const UserRouter = require("./users/router");
app.use(UserRouter);

const AuthRouter = require("./auth/router");
app.use(AuthRouter);

app.listen(port, () => {
  return console.log("Listening on port: " + port);
});
