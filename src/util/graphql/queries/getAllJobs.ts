import { gql } from "@apollo/client";
import { jobDetailFragment } from "../fragments";

export const GET_ALL_JOBS_QUERY = gql`
  query getAllJobs {
    getAllJobs {
      ...JobDetail
    }
  }
  ${jobDetailFragment}
`;
