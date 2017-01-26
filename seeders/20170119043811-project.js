'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Projects', [{
     title: "Neque porro quisquam est qui dolorem ipsum quia",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
     link: "http://www.google.com",
     createdAt : new Date(),
     updatedAt : new Date(),
     image: "http://i.imgur.com/JRKvl0E.png"
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    author: 'Lorem Ipsum'
  }
};
