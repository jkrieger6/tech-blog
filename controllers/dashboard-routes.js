const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET route for user dashboard, only post form the user should be shown
router.get("/", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  try {
    const postData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: { exclude: ["password"] },
      order: [["created_at", "DESC"]],
      include: [
        {
          model: User,
          // attributes: ["title", "content", "created_at"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// View all comments for a post
router.get("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Post,
          attributes: ["title"],
        },
      ],
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.render("blogPost", {
      comments,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
