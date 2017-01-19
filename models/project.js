module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Project.belongsTo(models.Author)
      }
    }
  });
  return Project;
};