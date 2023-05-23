const { BlogPost } = require('../models');

const blogPostData = [
    {
        title: 'Blog Post 1',
        content: 'This is the first blog post.',
        user_id: 1
    },
    {
        title: 'Blog Post 2',
        content: 'This is the second blog post.',
        user_id: 1
    },
    {
        title: 'Blog Post 3',
        content: 'This is the third blog post.',
        user_id: 1
    },
    {
        title: 'Blog Post 4',
        content: 'This is the fourth blog post.',
        user_id: 1
    },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;