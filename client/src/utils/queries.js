import { gql } from "@apollo/client";


export const QUERY_MALLS = gql`
query mall {
  mall {
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


export const QUERY_STORES = gql`
  {
    Store {
      id
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

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;



export const QUERY_DEVELOPER = gql`{
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
