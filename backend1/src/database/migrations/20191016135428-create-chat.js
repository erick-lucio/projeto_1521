'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chat', { 
      id:{
        type:Sequelize.INTEGER,
        autoIncremente:true,
        primaryKey:true,
        allowNull:false

     },
     messages:{
      type:Sequelize.STRING,
      allowNull:false

     },
     user_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
     },
     time_msg:{
        type:Sequelize.DATE,
        allowNull:false
     },
     destination:{
      type:Sequelize.STRING,
      allowNull:false

     },
     remetente:{
      type:Sequelize.STRING,
      allowNull:false
     },
     createdAt:{
      type:Sequelize.DATE,
      allowNull:true,
      },
    updatedAt:{
      type:Sequelize.DATE,
      allowNull:true
    }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chat');
  }
};
