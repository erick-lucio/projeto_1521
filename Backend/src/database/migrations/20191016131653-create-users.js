'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      } ,
      password_user:{
        type:Sequelize.STRING,
        allowNull:false
      },
      name_user:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      },
      permissionLvl:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:true
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:true
      }


    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
