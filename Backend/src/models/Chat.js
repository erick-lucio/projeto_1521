const { Model, DataTypes } = require('sequelize');

class Chat extends Model {
  static init(sequelize) {
    super.init({
      messages:DataTypes.STRING,
      user_id:DataTypes.INTEGER,
      time_msg:DataTypes.DATE,
      destination:DataTypes.STRING,
      remetente:DataTypes.STRING
    }, {
      sequelize,
      modelName: 'chat',
      freezeTableName: true,
    })
    
  }


}

module.exports =  Chat;