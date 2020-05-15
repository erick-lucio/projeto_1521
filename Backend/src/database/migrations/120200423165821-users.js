'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
      return queryInterface.createTable('users12', {
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
           allowNull:false
         },


        });
   
  },

  down: (queryInterface, Sequelize) => {
 
      //return ;//queryInterface.dropTable('users');
   
  }
};
