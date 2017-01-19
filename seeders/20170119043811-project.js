'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Project', [{
     author: 'Lorem Ipsum',
     title: "Neque porro quisquam est qui dolorem ipsum quia",
     link: "http://www.google.com",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    author: 'Lorem Ipsum'
  }
};
