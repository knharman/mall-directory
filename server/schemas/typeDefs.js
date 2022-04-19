const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Developer{
        _id: ID
        username: String
        email: String
        password: String
        malls: [Mall] 
    }

    type Auth{
        token: ID!
        user: Developer
    }

    type Mall{
        _id: ID
        mallName: String
        style: String
        location: String
        stores: [Store] 
    }

    type Store{
        _id: ID
        storeName: String
        image: String
        category: Category
        description: String
        url: String
    }

    type Category{
        _id: ID
        name: String
    }

    type Query{
        categories: [Category]
        developer: Developer
        mall(mallID: ID!): Mall
        malls: [Mall]
    }

    type Mutation {
        addDeveloper(username: String!, email: String!, password: String!): Auth
        addMall(mallName: String!, location: String!, style: String!): Developer
        login(email: String!, password: String!): Auth
        updateMall(_id: ID!, mallName: String!, style: String!, location: String!): Developer
        removeMall(_id: ID!): Developer
        addStore(mallID: ID!, storeName: String!, image: String!, category: String!, description: String!, url: String!): Mall
        updateStore(mallID: ID!, storeID: ID!, storeName: String!, image: String!, category: String!, description: String!, url: String!): Mall
        removeStore(mallID: ID!, storeID: ID!): Mall
    }
`;


module.exports = typeDefs;