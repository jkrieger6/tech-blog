const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{
                model: User,
                attributes: ['name']
            }]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts-admin', {
            layout: 'dashboard',
            posts
        });
    } catch (err) {
        res.redirect('login');
    }
});

// get one post for dashboard
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['name']
            }]
        });

        if (postData) {
            const post = postData.get({ plain: true });
            res.render('edit-post', {
                layout: 'dashboard',
                post
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

// View all comments for a post
router.get('/comments/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [{
                model: User,
                attributes: ['name']
            }]
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('view-comments', {
            layout: 'dashboard',
            comments
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;