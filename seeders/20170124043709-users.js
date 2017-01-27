'use strict';
const CONFIG = require('../config/config');
const bcrypt = require('bcrypt');


const salt = bcrypt.genSaltSync(CONFIG.saltRounds)
const newPassword = bcrypt.hashSync(CONFIG.seedPassword, salt)

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      first_name: 'Jay',
      last_name: 'houn',
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
