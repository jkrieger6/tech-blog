// API routes for the application
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");
const withAuth = require("../../utils/auth");

// Prefix all of the above routes with /api
router.use("/users", userRoutes);
router.use("/posts", blogRoutes);
router.use("/comments", commentRoutes);

// Exporting the router
module.exports = router;
