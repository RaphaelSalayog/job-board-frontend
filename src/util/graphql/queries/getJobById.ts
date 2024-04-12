import { gql } from "@apollo/client";

export const GET_JOB_BY_ID_QUERY = gql`
  query getJobById($id: ID!) {
    getJobById(id: $id) {
      id
      company {
        id
        name
        description
      }
      title
      description
      createdAt
    }
  }
`;
