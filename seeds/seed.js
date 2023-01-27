const sequelize = require('../config/connection');
const { User, Pet, Tag } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const tagData = require('./tagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  console.log(`${userData.length} users created`);

  await Pet.bulkCreate(petData);
  console.log(`${petData.length} pets created`);

  await Tag.bulkCreate(tagData);
  console.log(`${tagData.length} tags created`);


process.exit(0);

}

seedDatabase();
