const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      name_user:DataTypes.STRING,
      password_user:DataTypes.STRING,
      email:DataTypes.STRING,
      permissionLvl:DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'users',
      freezeTableName: true,
    })
  };
  
  
 
}

module.exports = Users;