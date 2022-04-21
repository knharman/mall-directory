const db = require('./connection');
const { Developer, Mall, Category, Store } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "ACCESSORIES" },
    { name: "APPAREL" },
    { name: "ARTS" },
    { name: "BEAUTY" },
    { name: "DEPARTMENT STORE" },
    { name: "DRINKS" },
    { name: "ELECTRONICS" },
    { name: "ENTERTAINMENT" },
    { name: "FAMILY" },
    { name: "FASHION" },
    { name: "FOOD" },
    { name: "FROZEN TREATS" },
    { name: "FULL SERVICE RESTRAUNT" },
    { name: "HAPPY HOUR BAR" },
    { name: "HEALTH" },
    { name: "HOME" },
    { name: "KIDS APPAREL" },
    { name: "LIFESTYLE" },
    { name: "LUXURY" },
    { name: "OTHER" },
    { name: "PETS" },
    { name: "QUICK BITES" },
    { name: "RECREATION" },
    { name: "SHOES" },
    { name: "SPECIALTY FOOD" },
    { name: "THEATER" },
    { name: "TOYS & GAMES" },
    { name: "TRAVEL" },
  ]);

  console.log('categories seeded');

  await Developer.deleteMany();

  await Developer.create({
    username: 'Chris',
    email: 'chris@gmail.com',
    password: 'secret-password',
    malls: []
  });

  await Developer.create({
    username: 'Kellie',
    email: 'kellie@gmail.com',
    password: 'secret-password',
    malls: []
  });

  await Developer.create({
    username: 'Joseph',
    email: 'joseph@gmail.com',
    password: 'secret-password'
  });

  await Developer.create({
    username: 'Zachary',
    email: 'zachary@gmail.com',
    password: 'secret-password'
  });

  await Developer.create({
    username: 'Maryus',
    email: 'maryus@gmail.com',
    password: 'secret-password'
  });

  await Developer.create({
    username: 'Mac',
    email: 'mac@gmail.com',
    password: 'secret-password'
  });

  await Developer.create({
    username: 'Christian',
    email: 'christian@gmail.com',
    password: 'secret-password'
  });

  console.log('developers seeded');
  process.exit();

});
