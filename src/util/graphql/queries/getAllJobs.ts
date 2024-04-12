import { gql } from "@apollo/client";

export const GET_ALL_JOBS_QUERY = gql`
  query getAllJobs {
    getAllJobs {
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
