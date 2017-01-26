'use strict';
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10)
const newPassword = bcrypt.hashSync("secret", salt)

console.log('newPassword: ', newPassword);



module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      first_name: 'John',
      last_name: 'doe',
      username: 'jay',
      password: newPassword,
      createdAt : new Date(),
      updatedAt : new Date(),
      admin: true
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    first_name: 'John'
  }
};
