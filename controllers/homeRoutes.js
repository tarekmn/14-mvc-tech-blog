const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: Comment, include: [{ model: User }] }, { model: User }],
  });

  const blogs = blogData.map((data) => data.get({ plain: true }));

  console.log(req.session.logged_in);
  console.log(blogs[0].comments)

  res.render("homepage", { blogs, loggedIn: req.session.logged_in });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  const blogData = await Blog.findAll({
    include: [{ model: Comment, include: [{ model: User }] }, { model: User }],
  });

  const blogs = blogData.map((data) => data.get({ plain: true }));

  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  console.log(blogs);
  console.log(req.session.user_id);

  res.render("dashboard", { blogs, loggedIn: req.session.logged_in, userID: req.session.user_id  });
});

router.get("/signup", (req, res) => {
  res.render("createaccount");
});

module.exports = router;
