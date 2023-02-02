const sequelize = require("../config/connection");
const { User, Pet, Tag, Picture, Adoption } = require("../models");

const userData = require("./userData.json");
const petData = require("./petData.json");
const tagData = require("./tagData.json");
const adoptionData = require("./adoption.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  console.log(`${userData.length} users created`);

  await Tag.bulkCreate(tagData);
  console.log(`${tagData.length} tags created`);

  await Pet.bulkCreate(petData);
  console.log(`${petData.length} pets created`);

  

  //await Adoption.bulkCreate(adoptionData);
  //console.log(`${adoptionData.length} adoption forms created`);

  process.exit(0);
};

seedDatabase();
