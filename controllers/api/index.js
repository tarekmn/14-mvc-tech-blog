const router = require("express").Router();
const userRoutes = require("./userRoutes");
const homeRoutes = require("../homeRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
