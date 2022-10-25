const sequelize = require("../config/connection");
const { User, Text } = require("../models");

const userData = require("./userData.json");
const textData = require("./textData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Text.create(textData);

  process.exit(0);
};

seedDatabase();
