const router = require('express').Router();
const { title } = require('process');
const { BlogPost, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blog posts
router.get('/', async (req, res) => {
    try {
      const blogPostData = await BlogPost.findAll({
        include: [
          {
            model: User, Comment,
            attributes: ['name', title, 'content', 'date_created'],
          },
        ],
      });
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET one blog post
router.get('/:id', async (req, res) => {
    try {
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        include: [
          {
            model: User, Comment,
            attributes: ['name', title, 'content', 'date_created'],
          },
        ],
      });
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE new blog post
router.post('/', withAuth, async (req, res) => {
    try {
      const newBlogPost = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlogPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// UPDATE blog post
router.put('/:id', withAuth, async (req, res) => {
    try {
      const blogPostData = await BlogPost.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogPostData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }
  
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// DELETE blog post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogPostData = await BlogPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogPostData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }
  
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;