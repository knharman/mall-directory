const db = require('./connection');
const { Developer, Mall, Category, Store } = require('../models');

db.once('open', async () => {
<<<<<<< HEAD
    await Mall.deleteMany();

    const malls = await Mall.insertMany([
        {mallName: 'Spencers',
          style: 'primary',
          location: "arkansas",
          stores: []
      },
        // {mallName: 'Marshalls'},
        // {mallName: 'rockville'}
    ])

        console.log('malls seeded');

    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Food' },
        { name: 'Household Supplies' },
        { name: 'Electronics' },
        { name: 'Books' },
        { name: 'Toys' }
      ]);

      console.log('categories seeded');

      await Store.deleteMany();

      const stores = await Store.insertMany([
        {
          storeName: 'Tin of Cookies',
          description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          image: 'cookie-tin.jpg',
          category: categories[0]._id,
          // mallName: malls[0]._id,
          url: "www.google.com",
          // style: "inperson"
        },
        {
         storeName: 'Canned Coffee',
          description:
            'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
          image: 'canned-coffee.jpg',
          category: categories[0]._id,
          // mallName: malls[0]._id,
          url: "www.google.com",
          // style: "inperson"
        },
        {
          storeName: 'Toilet Paper',
          category: categories[1]._id,
          description:
            'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
          image: 'toilet-paper.jpg',
          // mallName: malls[0]._id,
          url: "www.google.com",
          // style: "inperson"
        } 
    ]);
    
    console.log('products seeded');

    await Developer.deleteMany();

    await Developer.create({
        username: 'Pamela',
        email: 'tommy@testmail.com',
        password: 'password123',
        malls: [ ]
    });

    await Developer.create({
        username: 'Elijah',
        email: 'eholt@testmail.com',
        password: 'password12345'
      });

      await Developer.create({
        username: 'Joseph',
        email: 'JCooper@testmail.com',
        password: 'joseph123'
      });

      await Developer.create({
        username: 'Kellie',
        email: 'KHarman@testmail.com',
        password: 'kellie123'
      });

     

      console.log('developers seeded');
      process.exit();
    
    });
=======
  await Mall.deleteMany();

  const malls = await Mall.insertMany([
    {
      mallName: 'Spencers',
      style: 'primary',
      location: "arkansas",
      stores: []
    },
    // {mallName: 'Marshalls'},
    // {mallName: 'rockville'}
  ])


  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Store.deleteMany();

  const stores = await Store.insertMany([
    {
      storeName: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      // mallName: malls[0]._id,
      url: "www.google.com",
      // style: "inperson"
    },
    {
      storeName: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      // mallName: malls[0]._id,
      url: "www.google.com",
      // style: "inperson"
    },
    {
      storeName: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      // mallName: malls[0]._id,
      url: "www.google.com",
      // style: "inperson"
    }
  ]);

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
    email: 'tommy@testmail.com',
    password: 'password123',
    malls: []
  });

  await Developer.create({
    username: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  // await Developer.create({
  //   username: 'Joseph',
  //   email: 'JCooper@testmail.com',
  //   password: 'joseph'
  // });

  // await Developer.create({
  //   username: 'Kellie',
  //   email: 'KHarman@testmail.com',
  //   password: 'kellie'
  // });

  // await Developer.create({
  //   username: 'Joseph',
  //   email: 'JCooper@testmail.com',
  //   password: 'joseph'
  // });

  // await Developer.create({
  //   username: 'Joseph',
  //   email: 'JCooper@testmail.com',
  //   password: 'joseph'
  // });

  console.log('developers seeded');
  process.exit();

});
>>>>>>> develop
