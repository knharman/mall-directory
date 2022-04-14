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
