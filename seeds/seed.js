const sequelize = require("../config/connection");
const seedText = require("../seeds/textData.json");
const { User, Text } = require("../models");

const userData = require("./userData.json");
const textData = require("./textData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedText();

  process.exit(0);
};

seedDatabase();
