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
mutation addMall($mallName: String!, $location: String!, $style: String!) {
  addMall(mallName: $mallName, location: $location, style: $style) {
    _id
    username
    email
    password
    malls {
      _id
      mallName
      style
      location
      stores {
        _id
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

export const REMOVE_MALL = gql`
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

export const ADD_STORE = gql`
mutation Mutation($mallId: ID!, $storeName: String!, $image: String!, $category: String!, $description: String!, $url: String!) {
  addStore(mallID: $mallId, storeName: $storeName, image: $image, category: $category, description: $description, url: $url) {
    mallName
    style
    location
    stores {
      storeName
      image
      category {
        name
      }
      description
      url
    }
  }
}

`;

export const UPDATE_STORE = gql`
mutation updateStore($mallId: ID!, $storeId: ID!, $storeName: String!, $image: String!, $category: String!, $description: String!, $url: String!) {
  updateStore(mallID: $mallId, storeID: $storeId, storeName: $storeName, image: $image, category: $category, description: $description, url: $url) {
    _id
    mallName
    style
    location
    stores {
      _id
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

export const REMOVE_STORE = gql`
  mutation RemoveStore($mallId: ID!, $storeId: ID!) {
    removeStore(mallID: $mallId, storeID: $storeId) {
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
