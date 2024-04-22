import { gql } from "@apollo/client";

export const jobDetailFragment = gql`
  fragment JobDetail on Job {
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
`;
