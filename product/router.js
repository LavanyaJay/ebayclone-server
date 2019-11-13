const { Router } = require("express");
const Product = require("./model");
const router = new Router();
const auth = require("../auth/middleware");

router.post("/ads", (req, res, next) => {
  Product.create({
    title: req.body.title,
    desc: req.body.desc,
    image: req.body.image,
    price: req.body.price,
    email: req.body.email,
    phone: req.body.phone
  })
    .then(ad => res.json(ad))
    .catch(err => next(err));
});

router.get("/ads", auth, (req, res, next) => {
  Product.findAll()
    .then(ad => res.json(ad))
    .catch(err => next(err));
});

router.get("/ads/:adId", (req, res, next) => {
  Product.findByPk(parseInt(req.params.adId))
    .then(ad => res.json(ad))
    .catch(err => next(err));
});

module.exports = router;
