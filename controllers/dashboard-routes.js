const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET route for user dashboard, only post form the user should be shown
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{
                model: User,
                attributes: ['title', 'content', 'created_at']
            }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {
            layout: 'dashboard',
            posts
        });
    } catch (err) {
        res.redirect('login');
    }
});

// View all comments for a post
router.get('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [{
                model: User,
                attributes: ['name']
            },
        {
            model: Post,
            attributes: ['title']
        }]
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('blogPost', {
            layout: 'dashboard',
            comments
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;