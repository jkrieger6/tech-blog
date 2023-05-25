const router = require("express").Router();
const { User, Comment, BlogPost } = require("../models");

// GET all posts for homepage and the assoicaited comments
router.get("/", async (req, res) => {
  try {
    const postData = await BlogPost.findAll({
      
          include: [
            {
            model: User,
            attributes: ["name"],
            },
            {
              model: Comment,
              attributes: ["comment_text"],
            },
          ],
        },
    );
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard route
router.get("/dashboard", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("dashboard");
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
