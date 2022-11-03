const router = require("express").Router();
const userRoutes = require("./userRoutes");
const homeRoutes = require("../homeRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const deleteRoutes = require("./deleteRoutes");

router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/delete", deleteRoutes);

module.exports = router;
