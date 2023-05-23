const sequelize = require('../config/connection');
const seedBlogPosts = require('./blogPost-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
   
    await seedBlogPosts();
   
    await seedComments();
   

    process.exit(0);
}

seedAll();