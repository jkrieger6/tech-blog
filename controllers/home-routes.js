const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: BlogPost,
          attributes: ["title", "content", "created_at"],
          include: [
            {
            model: User,
            attributes: ["name"],
            },
            {
              model: Comment,
              attributes: ["content", "created_at"],
            },
          ],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: BlogPost,
          attributes: ["title", "content", "created_at"],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
            {
              model: Comment,
              attributes: ["content", "created_at"],
            },
          ],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("BlogPost", {
      post: post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;