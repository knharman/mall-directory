const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { Developer, Mall, Store, Category } = require("../models");

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        developer: async (parent, args, context) => {
            if (context.developer) {
                const developer = await Developer.findById(
                    context.developer._id
                ).populate({
                    // path: "",
                    populate: "category",
                });

                //   developer.stores.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return developer;
            }

            // throw new AuthenticationError("Not logged in");
        },

        store: async (parent, { category, storeName }) => {
            const params = {};

            if (category) {
                params.category = category.name;
            }
            if (storeName) {
                params.storeName = {
                    $regex: storeName,
                };
            }
            return await Store.find(params).populate("category");
        },

        mall: async (parent, { store, mallName }) => {
            const params = {};

            if (store) {
                params.store = store.name;
            }
            if (mallName) {
                params.mallName = {
                    $regex: mallName,
                };
            }
            return await Mall.find(params).populate("store");
        },
    },

    Mutation: {
        addDeveloper: async (parent, args) => {
            const developer = await Developer.create(args);
            const token = signToken(developer);

            return { token, user: developer };
        },
        addMall: async (parent, { mallName, style, location }, context) => {
            if (context.user) {
                const mall = await Mall.create({ mallName, style, location });
                await Developer.findByIdAndUpdate(context.user._id, {
                    $push: { malls: mall },
                });

                return { mallName, style, location };
            }
            throw new AuthenticationError("Not logged in");
        },
        login: async (parent, { email, password }) => {
            const developer = await Developer.findOne({ email });

            if (!developer) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await developer.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(developer);

            return { token, user: developer };
        },
        updateMall: async (parent, { _id, mallName, style, location }, context) => {
            const updates = { mallName, style, location };
            if (context.user) {
                return await Mall.findByIdAndUpdate(_id, updates, { new: true });
            }
            throw new AuthenticationError("Not logged in");
        },
        removeMall: async (parent, { _id }, context) => {
            if (context.user) {
                return await Mall.findOneAndDelete({ _id });
            }
            throw new AuthenticationError("Not logged in");
        },
        addStore: async (
            parent,
            { mallID, storeName, image, category, description, url },
            context
        ) => {
            if (context.user) {
                const cat = await Category.findOne({ name: category });
                const store = new Store({
                    storeName,
                    image,
                    category: cat._id,
                    description,
                    url,
                });

                await Mall.findByIdAndUpdate(mallID, { $push: { stores: store } });

                store.category = cat
                console.log(store)
                return store;
            }

            throw new AuthenticationError("Not logged in");
        },
        updateStore: async (
            parent,
            { mallID, storeID, storeName, image, category, description, url },
            context
        ) => {
            if (context.user) {
                const cat = await Category.findOne({ name: category });

                const storeUpdates = {
                    storeName,
                    image,
                    category: cat._id,
                    description,
                    url,
                };

                const mall = await Mall.findById(mallID)
                const store = mall.stores.id(storeID)
                store.set(storeUpdates)
                mall.save()

                return mall;
            }
            throw new AuthenticationError("Not logged in");
        },
        removeStore: async (parent, { mallID, storeID }, context) => {
            if (context.user) {
                const mall = await Mall.findOne({ _id: mallID });

                mall.stores.id(storeID).remove();
                mall.save();

                return mall;
            }
            throw new AuthenticationError("Not logged in");
        },
    },
};

module.exports = resolvers;
