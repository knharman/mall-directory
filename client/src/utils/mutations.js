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

export const ADD_MALL = gql`
  mutation addMall(
    $mallName: String!
    $style: String!
    $location: String!
  ) {
    mall(
      mallName: $mallName
      style: $style
      location: $location
    ) {
      token
      user {
        _id
      }
    }
  }
`;