const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.delete("/:id", async (req, res) => {
  try {
    const data = await Blog.destroy({
      where: {
        id: req.params.blog_id,
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

module.exports = router;
