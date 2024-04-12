import { useLazyQuery } from "@apollo/client";
import { GET_JOB_BY_ID_QUERY } from "../queries/getJobById";
import { useCallback } from "react";

export const useGetJobById = () => {
  const [getJobById, { data, loading, error }] =
    useLazyQuery(GET_JOB_BY_ID_QUERY);

  const getJobByIdApi = useCallback(
    (id: string | string[]) => {
      getJobById({
        variables: {
          id: id,
        },
      });
    },
    [getJobById]
  );

  return {
    getJobByIdApi,
    data,
    loading,
    error,
  };
};
