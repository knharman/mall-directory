const db = require("./connection");
const { Mall, Store, Category } = require("../models");

db.once('open', async () => {
const categories = await Category.insertMany([
  { name: "Food" },
  { name: "Household Supplies" },
  { name: "Electronics" },
  { name: "Books" },
  { name: "Toys" },
]);

console.log("categories seeded");

await Store.deleteMany();

const store = await Store.create(
  {
    storeName: "Store1",
    image: "Image1",
    category: categories[2]._id,
    description: "Description1",
    url: "URL1",
  },
  {
    storeName: "Store2",
    image: "Image2",
    category: categories[2]._id,
    description: "Description2",
    url: "URL2",
  },
  {
    storeName: "Store3",
    image: "Image3",
    category: categories[2]._id,
    description: "Description3",
    url: "URL3",
  }
);

console.log("stores seeded");

await Mall.deleteMany();

const malls = await Mall.insertMany([
  {
    mallName: "Mall1",
    style: "Style1",
    location: "Location1",
    stores: store[2]._id,
  },
  {
    mallName: "Mall2",
    style: "Style2",
    location: "Location2",
    stores: store[2]._id,
  },
  {
    mallName: "Mall3",
    style: "Style3",
    location: "Location3",
    stores: store[1]._id,
  },
]);

console.log("malls seeded");



process.exit();
})