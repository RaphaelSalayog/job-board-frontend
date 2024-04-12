import { useQuery } from "@apollo/client";
import { getAllJobs } from "../queries/getAllJobs";

export const useGetAllJobsQuery = () => {
  const { data, loading, error } = useQuery(getAllJobs);

  return {
    data,
    loading,
    error,
  };
};
