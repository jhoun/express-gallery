'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    link:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isURL: true
      }
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty:true
      }
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isURL: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Project;
};