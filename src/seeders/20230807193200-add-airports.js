'use strict';

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert('Airports',[
      {
        name :'Dimna Airport', //We are trying to create airports with the same city names .. Like as if single city has multiple airports
        cityId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name :'Sonari Airport',
        cityId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name :'Sakchi Airport',
        cityId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name :'Chandni Chowk Airport',
        cityId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
