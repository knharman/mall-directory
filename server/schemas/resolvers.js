const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Developer, Mall } = require('../models');

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
    Mutation: {
        addDeveloper: async (parent, args) => {
            const developer = await Developer.create(args);
            const token = signToken(developer);

            return { token, user: developer };
        },
        addMall: async (parent, args, context) => {
            if (context.user) {
                const mall = await Mall.create(args);
                await Developer.findByIdAndUpdate(context.user._id, { $push: { malls: mall } });

                return { mall }
            }
            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const developer = await Developer.findOne({ email });

            if (!developer) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await developer.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(developer);

            return { token, user: developer };
        },
        updateMall: async (parent, { _id, mallName, style, location }, context) => {
            const updates = { mallName, style, location }
            if (context.user){
                return await Mall.findByIdAndUpdate(_id, updates, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        removeMall: async (parent, { _id }, context) => {
            if (context.user){
                return await Mall.findOneAndDelete({_id})
            }
            throw new AuthenticationError('Not logged in');
        }
    }

};

module.exports = resolvers;