import { gql } from '@apollo/client';

export const DEVELOPER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MALL = gql`
  mutation addMall(
    $mallName: String!
    $style: String!
    $location: String!
  ) {
    addMall(
      mallName: $mallName
      style: $style
      location: $location
    ) {
      token
      user{
        _id
      }
    }
  }
`;

export const UPDATE_MALL = gql`
mutation UpdateMall($id: ID!, $mallName: String!, $style: String!, $location: String!) {
  updateMall(_id: $id, mallName: $mallName, style: $style, location: $location) {
    mallName
    location
    _id
    style
    stores {
      storeName
      image
      category {
        _id
        name
      }
      description
      url
    }
  }
}
`;

export const DELETE_MALL = gql`
mutation RemoveMall($id: ID!) {
  removeMall(_id: $id) {
    _id
    mallName
    style
    location
    stores {
      storeName
      image
      description
      url
      category {
        _id
        name
      }
    }
  }
}
`;
