const router = require("express").Router();
const { Text, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const textData = await Text.findAll();

  const texts = textData.map((data) => data.get({ plain: true }));

  console.log(texts); //Does work

  res.render("homepage", { texts });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
