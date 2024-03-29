const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const expenseuserdetails=sequelize.define('Expenseuserdetails',{
       id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
       },
    Name:{
     type:Sequelize.STRING,
     allowNull:false,
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
       },
       Password:{
        type:Sequelize.STRING,
        allowNull:false,
       },
       ispremiumuser:Sequelize.BOOLEAN,
       TotalExpense:{
          type:Sequelize.INTEGER,
          defaultValue:0,
       }
    });
 module.exports=expenseuserdetails;
  

