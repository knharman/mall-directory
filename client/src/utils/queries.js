import { gql } from "@apollo/client";

export const QUERY_MALLS = gql`
query Mall {
  mall {
    _id
    mallName
    style
    location
    stores {
      mallID
      storeName
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

// export const QUERY_USER = gql`
//   {
//     user {
//       username
//       email
//       malls {
//         _id
//         mallName
//         style
//         location
//         Address
//         stores {
//           storeName
// `;

// export const QUERY_ALL_STORES = gql`
//   {
//     stores {
//       mallID
//       storeName
//       category
//       description
//       url
//       mall {
//         mallName
//       }
//     }
//   }
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
//           url
//           image
//         }
//       }
//     }
//   }
// `;
