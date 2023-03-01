'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        autoIncremente: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

      home_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },

      home_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      away_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },

      away_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
   })
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('matches');

  }
};
