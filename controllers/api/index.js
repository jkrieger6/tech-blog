// API routes for the application
const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Prefix all of the above routes with /api
router.use('/users', userRoutes);
router.use('/posts', blogRoutes);
router.use('/comments', commentRoutes);

// Exporting the router
module.exports = router;
