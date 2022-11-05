const router = require("express").Router();
const userRoutes = require("./userRoutes");
const homeRoutes = require("../homeRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");

router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);

module.exports = router;
