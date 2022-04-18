import { gql, useQuery } from "@apollo/client";


export const GET_MALLS = gql`
query GetMall {
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

export const GET_DEVELOPER = gql`{
    query GetDeveloper {
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


// export const QUERY_STORES = gql`
//   {
//     Store {
//       id
//       mallID
//       storeName
//       image
//       description
//       URL
//       category {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;


