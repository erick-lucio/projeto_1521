const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Users = require('../models/Users');
const Chat = require('../models/Chat');


const connection = new Sequelize(dbConfig);

Users.init(connection);
Chat.init(connection);


Chat.belongsTo(Users,{
    foreignKey:'user_id'
});



module.exports = connection;