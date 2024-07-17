"use strict";

const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "",
          password: await bcrypt.hash("", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user1",
          password: await bcrypt.hash("1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user2",
          password: await bcrypt.hash("1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user3",
          password: await bcrypt.hash("1234", saltRounds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
