'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Electronics',
        description: 'This category has electronic products',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kitchen Ware',
        description: 'This category contains kitchen related products',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fashion',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
