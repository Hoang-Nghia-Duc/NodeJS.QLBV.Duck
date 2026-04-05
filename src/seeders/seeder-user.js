'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'example@example.com',
        passWord: '123456',
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        phoneNumber: '555-1234',
        gender: 1,
        typeRole: 'ROLE',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
