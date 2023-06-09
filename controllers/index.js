const router = require("express").Router();
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes.js");
const homeRoutes = require("./home-routes.js");
const withAuth = require("../utils/auth");

router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", homeRoutes);

module.exports = router;
