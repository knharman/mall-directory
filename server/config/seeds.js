const db = require('./connection');
const { Developer, Mall, Category, Store } = require('../models');

db.once('open', async () => {
    await Mall.deleteMany();

    const malls = await Mall.insertMany([
        {mallName: 'Spencers'},
        {mallName: 'Marshalls'},
        {mallName: 'rockville'}
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
          mallName: malls[0]._id,
          url: "www.google.com",
          style: "inperson"
        },
        {
         storeName: 'Canned Coffee',
          description:
            'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
          image: 'canned-coffee.jpg',
          category: categories[0]._id,
          mallName: malls[0]._id,
          url: "www.google.com",
          style: "inperson"
        },
        {
          storeName: 'Toilet Paper',
          category: categories[1]._id,
          description:
            'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
          image: 'toilet-paper.jpg',
          mallName: malls[0]._id,
          url: "www.google.com",
          style: "inperson"
        } 
    ]);
    
    console.log('products seeded');

    await Developer.deleteMany();

    await Developer.create({
        firstName: 'Pamela',
        lastName: 'Anderson',
        email: 'tommy@testmail.com',
        password: 'password123',
        malls: [
          {
            stores: [stores[0]._id, stores[0]._id, stores[1]._id]
          }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
      });

      console.log('developers seeded');
      process.exit();
    
    });