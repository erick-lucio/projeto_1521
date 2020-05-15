const Sequelize = require('sequelize');
const db_config = require('./db');

const Users = require('../models/Users');
const Chat = require('../models/Chat');
const connection = new Sequelize(db_config);

Chat.init(connection);
Users.init(connection);

module.exports = connection;
