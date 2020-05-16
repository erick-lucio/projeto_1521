const User = require('../models/Users');
const { Op } = require("sequelize");

module.exports = {
  async returnAllUsers(req, res) {
    let users = await User.findAll({
      attributes:['name_user','password_user','email','permissionLvl']
    });
    //console.log(users);
    return res.json(users);
  },

  async createUser(req, res) {
    let { valueName, valuePassword ,valueEmail} = req.body;
    let users_check = await User.findAll({
      attributes:['name_user','password_user','email','permissionLvl'],
      where: {
        [Op.or]: [
          {name_user: valueName },
          {password_user: valuePassword },
          {email: valueEmail}
          
        ]
      }
    });
   
    
    if(users_check.length != 0){
      return res.json('false')
    }else{
      let user_create = await User.create({
        name_user:valueName,
        password_user:valuePassword,
        email:valueEmail
       });
       return res.json('true')
    }
    

     //return res.json(users_check);
    
  },
  async searchUser(req,res){
    let {valuePassword ,valueEmail} = req.params;
    let get_user = await User.findAll({
      attributes:['name_user','password_user','email','permissionLvl'],
      where: {
        [Op.or]: [
          {name_user: 'name' },
          {password_user: valuePassword },
          {email: valueEmail}
          
        ]
      }
    });
    if(get_user.length != 0){
       return res.json(get_user[0].name_user)
    }else{
      console.log('false')
    }
  }
};