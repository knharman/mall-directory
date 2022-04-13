const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const {User} = require('../models');


const resolvers = {
    user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: "",
            populate: "malls",
          });
  
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw new AuthenticationError("Not logged in");
      },

};

module.exports = resolvers;