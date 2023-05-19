const User = require('./user');
const BlogPost = require('./blogPost');
const Comment = require('./Comment');

// User has many Blog Posts
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blog Post belongs to User
BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comment belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Blog Post has many Comments
BlogPost.hasMany(Comment, {
    foreignKey: 'blogPost_id',
    onDelete: 'CASCADE'
});

// Comment belongs to Blog Post
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPost_id'
});

module.exports = { User, BlogPost, Comment };