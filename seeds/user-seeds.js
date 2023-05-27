const { User } = require('../models');

const userData = [
    {
        name: "Test",
        email: "test@test.com",
        password: bcrypt.hashSync("Password", 10)
    },
    {
        name: "Tom",
        email: "tom@test.com",
        password: bcrypt.hashSync("Testing", 10)
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;