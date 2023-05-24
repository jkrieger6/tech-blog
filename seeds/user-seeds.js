const { User } = require('../models');

const userData = [
    {
        "name": "Test",
        "email": "test@test.com",
        "password": "Password"
    },
    {
        "name": "Tom",
        "email": "tom@test.com",
        "password": "Testing"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;