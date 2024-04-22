import { gql } from "@apollo/client";
import { jobDetailFragment } from "../fragments";

export const GET_JOB_BY_ID_QUERY = gql`
  query getJobById($id: ID!) {
    getJobById(id: $id) {
      ...JobDetail
    }
  }
  ${jobDetailFragment}
`;
