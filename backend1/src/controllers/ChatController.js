const User = require('../models/Users');
const Chat = require('../models/Chat');
const { Op } = require("sequelize");

module.exports = {

  async searchLast100Messages(req, res) {
    let {valueName} = req.params;
    
    valueName = 'erick';
    let chat_messages = await Chat.findAll({
      attributes:['messages','name_user'],
      where: {
        [Op.or]: [
          {name_user: valueName },
                 
        ]
      },
      include:[{
        model: User,
        as: 'user'
      }]     

     
    })
    console.log(chat_messages.messages)
    return res.json(chat_messages.messages);
  },


};