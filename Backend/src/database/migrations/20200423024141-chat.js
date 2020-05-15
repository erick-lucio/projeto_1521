'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
      return queryInterface.createTable('chat12', {
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
            allowNull:false
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

        
        });
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
