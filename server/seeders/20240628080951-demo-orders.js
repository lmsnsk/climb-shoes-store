"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          products:
            '[{"product": {"price":130, "title":"scarpa", "photo":"", "vendor": "", "vendorInfo":""}," count": 2}]',
          totalPrice: 1000,
          status: true,
          owner: 2,
          address: "Moscow",
          date: "sdfsdf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
