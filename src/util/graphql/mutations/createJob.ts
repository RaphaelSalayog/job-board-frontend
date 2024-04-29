import { gql } from "@apollo/client";

export const CREATE_JOB_MUTATION = gql`
  mutation createJob($input: CreateJobInput!) {
    createJob(input: $input) {
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
