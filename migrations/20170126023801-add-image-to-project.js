'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Projects', 'image', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Projects', 'image' );
  }
};
