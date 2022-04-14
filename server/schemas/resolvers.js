const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const {Developer} = require('../models');


const resolvers = {
    // developer: async (parent, args, context) => {
    //     if (context.developer) {
    //       const developer = await Developer.findById(context.developer._id).populate({
    //         path: "",
    //         populate: "malls",
    //       });
  
    //       developer.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
    //       return developer;
    //     }
  
    //     throw new AuthenticationError("Not logged in");
    //   },

};

module.exports = resolvers;