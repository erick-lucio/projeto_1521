const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name_user:DataTypes.STRING,
      password_user:DataTypes.STRING,
      email:DataTypes.STRING,
      permissionLvl:DataTypes.INTEGER,
    }, {
      sequelize,
      TableName: 'users',
    })
  }
  
  associate(models) {    
    this.belongsToMany(models.Chat, {
      foreignKey: 'id',
      
      });
  }
 
}

module.exports = User;