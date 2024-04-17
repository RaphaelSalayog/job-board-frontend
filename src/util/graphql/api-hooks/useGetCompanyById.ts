import { useLazyQuery } from "@apollo/client";
import { GET_COMPANY_BY_ID_QUERY } from "../queries/getCompanyById";
import { useCallback } from "react";

export const useGetCompanyById = () => {
  const [getCompanyById, { data, loading, error }] = useLazyQuery(
    GET_COMPANY_BY_ID_QUERY
  );

  const getCompanyByIdApi = useCallback(
    (id: string | string[]) => {
      getCompanyById({
        variables: {
          id: id,
        },
      });
    },
    [getCompanyById]
  );

  return {
    getCompanyByIdApi,
    data,
    loading,
    error,
  };
};
