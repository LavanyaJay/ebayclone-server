const Sequelize = require("sequelize");
const db = require("../db");
const Product = db.define("product", {
  title: {
    type: Sequelize.STRING,
    field: "title"
  },
  desc: {
    type: Sequelize.STRING,
    field: "description"
  },
  image: {
    type: Sequelize.STRING,
    field: "image"
  },
  price: {
    type: Sequelize.FLOAT,
    field: "price"
  },
  email: {
    type: Sequelize.STRING,
    field: "email"
  },
  phone: {
    type: Sequelize.STRING,
    field: "phone"
  }
});

module.exports = Product;
