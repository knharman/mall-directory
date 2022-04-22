import { gql } from "@apollo/client";

export const GET_MALL = gql`
query Mall($mallId: ID!) {
  mall(mallID: $mallId) {
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

export const GET_MALLS = gql`
query Malls {
  malls {
    _id
    mallName
    style
    location
    stores {
      _id
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

export const GET_DEVELOPER = gql`
query getDeveloper {
  developer {
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

export const GET_CATEGORIES = gql`
  query categories {
  categories {
    _id
    name
  }
}
`;