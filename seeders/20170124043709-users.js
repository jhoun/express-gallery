'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      first_name: 'John',
      last_name: 'doe',
      username: 'johnnydoe',
      password: '1w809urjsoejr[woejir',
      createdAt : new Date(),
      updatedAt : new Date(),
      admin: true
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    first_name: 'John'
  }
};
