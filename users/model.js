const Sequelize = require("sequelize");
const db = require("../db");
const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    field: "email"
  },
  password: {
    type: Sequelize.STRING,
    field: "password"
  }
});
module.exports = User;
