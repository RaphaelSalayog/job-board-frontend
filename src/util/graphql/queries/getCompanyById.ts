import { gql } from "@apollo/client";

export const GET_COMPANY_BY_ID_QUERY = gql`
  query getCompanyById($id: ID!) {
    getCompanyById(id: $id) {
      id
      name
      description
      jobs {
        id
        title
        description
        createdAt
      }
    }
  }
`;
