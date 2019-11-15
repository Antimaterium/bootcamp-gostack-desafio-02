module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'provider', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }),

  down: queryInterface => queryInterface.removeColumn('users', 'provider'),
};
