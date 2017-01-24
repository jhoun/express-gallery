'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Projects', [{
     author: 'Lorem Ipsum',
     title: "Neque porro quisquam est qui dolorem ipsum quia",
     link: "http://www.google.com",
     description: "Lorem ipsum dolor sit amet",
     createdAt: "2017-01-23 18:31:04.857-10",
     updatedAt: "2017-01-23 18:31:04.857-10"
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    author: 'Lorem Ipsum'
  }
};
