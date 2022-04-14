const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const {Developer, Store} = require('../models');


const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
    developer: async (parent, args, context) => {
        if (context.developer) {
          const developer = await Developer.findById(context.developer._id).populate({
            // path: "",
            populate: "catergory",
          });
  
        //   developer.stores.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return developer;
        }
  
        throw new AuthenticationError("Not logged in");
      },
      store: async (parent, {category, storeName}) => {
        const params = {};

        if (category) {
            params.category = category.name;
        }
        if (storeName) {
            params.storeName = {
                $regex: storeName,
            };
        }
        return await Store.find(params).populate('category');
      },

    },
    Mutation: {

    }
};

module.exports = resolvers;