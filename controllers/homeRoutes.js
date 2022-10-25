const router = require("express").Router();
const { Text, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const textData = await Text.findAll();

    const text = textData.map((data) => data.get({ plain: true }));

    res.render("homepage", text);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
