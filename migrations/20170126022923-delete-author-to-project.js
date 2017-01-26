'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     queryInterface.removeColumn( 'Projects', 'author' );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Projects', 'author' );
  }
};
