const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

module.exports = router;
