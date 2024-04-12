import { gql } from "@apollo/client";

export const getAllJobs = gql`
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
