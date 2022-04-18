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
    }

    type Mutation {
        addDeveloper(username: String!, email: String!, password: String!): Auth
        addMall(mallName: String!, style: String!, location: String!): Mall
        login(email: String!, password: String!): Auth
        updateMall(_id: ID!, mallName: String!, style: String!, location: String!): Mall
        removeMall(_id: ID!): Mall
        addStore(mallID: ID!, storeName: String!, image: String!, category: String!, description: String!, url: String!): Store
        updateStore(mallID: ID!, storeID: ID!, storeName: String!, image: String!, category: String!, description: String!, url: String!): Mall
        removeStore(mallID: ID!, storeID: ID!): Mall
    }
`;


module.exports = typeDefs;