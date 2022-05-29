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

    await queryInterface.bulkInsert('Products', [
      {
        name: 'Iphone 13',
        description: 'The brand new iphone 13 by apple',
        cost: 100000,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Ipad air',
        description: 'The brand new apple ipad air',
        cost: 50000,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Mac-Book Pro',
        description: 'The brand new apple macbook pro',
        cost: 150000,
        categoryId: 1,
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
    await queryInterface.bulkDelete('Products', null, {});
  }
};
