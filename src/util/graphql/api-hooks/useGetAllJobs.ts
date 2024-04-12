import { useQuery } from "@apollo/client";
import { GET_ALL_JOBS_QUERY } from "../queries/getAllJobs";

export const useGetAllJobsQuery = () => {
  const { data, loading, error } = useQuery(GET_ALL_JOBS_QUERY);

  return {
    data,
    loading,
    error,
  };
};
