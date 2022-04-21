const db = require('./connection');
const { Developer, Mall, Category, Store } = require('../models');

db.once('open', async () => {
  await Mall.deleteMany();

  const malls = await Mall.insertMany([
    {
      mallName: 'Gateway Plaza',
      style: 'Plaza',
      location: "Portland OR",
      stores: []
    },
    {
      mallName: 'Waterbury Mall',
      style: 'Shopping Center',
      location: "Portland OR",
      stores: []
    },
    {
      mallName: 'Lincoln Center',
      style: 'Strip Mall',
      location: "Portland OR",
      stores: []
    },
    {
      mallName: 'Gateway Plaza',
      style: 'Plaza',
      location: "Portland OR",
      stores: []
    },
    {
      mallName: 'Seabreeze Shops',
      style: 'Shopping Center',
      location: "Seattle WA",
      stores: []
    },
    {
      mallName: 'Liberty Galleria',
      style: 'Shopping Center',
      location: "Seattle WA",
      stores: []
    }
  ])


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

  console.log('products seeded');

  await Developer.deleteMany();

  await Developer.create({
    username: 'TEST',
    email: 'test@gmail.com',
    password: 'password',
    malls: []
  });

  await Developer.create({
    username: 'Pamela',
    email: 'pamela@testmail.com',
    password: 'password123',
    malls: []
  });

  await Developer.create({
    username: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('developers seeded');
  process.exit();

});
