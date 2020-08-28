'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users',
      'is_admin',
      {
        type: Sequelize.BOOLEAN,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users','isAdmin')
  },
};
