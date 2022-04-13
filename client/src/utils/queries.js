import { gql } from "@apollo/client";

export const QUERY_MALLS = gql`
  {
    Mall {
      _id
      mallName
      style
      location
      Store {
      storeName
      image
      description
      URL
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_STORES = gql` 
  {
    Store {
      mallID
      storeName
      image
      description
      URL
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      email
      malls {
        _id
        mallName
        style
        location
        Address
        stores {
          storeName
        }
      }
    }
  }
`;
