const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const blogData = await Blog.findAll();

  const blogs = blogData.map((data) => data.get({ plain: true }));

  console.log(req.session.logged_in);

  res.render("homepage", { blogs });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
