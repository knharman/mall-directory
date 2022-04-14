import { gql } from "@apollo/client";

export const QUERY_MALLS = gql`
    query getMalls($store: ID) {
        
        _id
        mallName
        style
        location
        store {
            _id
        }
        }
    }
`;


export const QUERY_ALL_MALLS = gql`
 {

 }
`;

export const QUERY_DEVELOPER = gql`
  {
    developer {
      username
      malls {
        _id
        location
        stores {
          mallID
          storeName
          description
          category
         url
          image
        }
      }
    }
  }
`;
