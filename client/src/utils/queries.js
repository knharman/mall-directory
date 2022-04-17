import { gql } from "@apollo/client";

// export const QUERY_MALLS = gql`
//     query getMalls($developer: ID) {
//         malls(developer: $developer) {
//         _id
//         mallName
//         style
//         location
//         store {
//             _id
//         }
//         }
//     }
// `;

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


// export const QUERY_STORE = gql`
//  {
    
//  }
// `;

// export const QUERY_ALL_STORES = gql`
//  {
//     stores {
//         mallID
//         storeName
//         category
//         description
//         url
//         mall {
//             mallName
//         }

//     }
//  }
// `;

// export const QUERY_DEVELOPER = gql`
//   {
//     developer {
//       username
//       malls {
//         _id
//         location
//         stores {
//           mallID
//           storeName
//           description
//           category
//          url
//           image
//         }
//       }
//     }
//   }
// `;
