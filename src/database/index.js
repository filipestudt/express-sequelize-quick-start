const Sequelize = require('sequelize');

const User = require('../models/User');
const Post = require('../models/Post');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'blog',
    define: {
        timestamps: false,
        underscored: true,
    }
});

User.init(connection);
Post.init(connection);

module.exports = connection;