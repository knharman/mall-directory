const {gql } = require('apollo-server-express');

const typeDefs = gql`
type Developer{
_id: ID
username: String
email: String
password: String
malls: [Mall] (array of malls)
}
type Auth{
token: ID!
user: User
}
type MALL{
_id: ID
mallName: String
style: String
location: String
stores: [Store] (array of stores)
}
type STORE{
mallID: ID
storeName: String
image: String (?)
category: Category
description: String
url: String
}
type Category{
_id: ID
name: String
}
type Mutation {
    addDeveloper(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!): Auth
addMall(mallName: String!, style: String!, location: String!)
updateMall(mallName: String!, style: String!, location: String!)
removeMall(_id: ID!)
addStore(mallID: ID!, storeName: String!, image: String!(?), category: String!(?), description: String!, url: String!)
updateStore(mallID: ID!, storeName: String!, image: String!(?), category: String!(?), description: String!, url: String!)
removeStore(mallID: ID!)
}
`;


module.exports = typeDefs;