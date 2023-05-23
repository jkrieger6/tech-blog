const { User } = require('../models');

const userData = [
    {
        "name": "Test",
        "email": "test@test.com",
        "password": "Password"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;