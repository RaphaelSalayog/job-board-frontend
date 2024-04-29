import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS_QUERY } from "../queries/getAllJobs";

export const useGetAllJobsQuery = (limit?: number, offset?: number) => {
  const { data, loading, error } = useQuery(GET_ALL_JOBS_QUERY, {
    variables: {
      limit,
      offset,
    },
  });

  return {
    data,
    loading,
    error,
  };
};
