import { useQuery } from "@apollo/client";
import { GET_COMPANY_BY_ID_QUERY } from "../queries/getCompanyById";

export const useGetCompanyById = (id: string | string[] | undefined) => {
  const { data, loading, error } = useQuery(GET_COMPANY_BY_ID_QUERY, {
    variables: {
      id: id,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

// export const useGetCompanyById = () => {
//   const [getCompanyById, { data, loading, error }] = useLazyQuery(
//     GET_COMPANY_BY_ID_QUERY
//   );

//   const getCompanyByIdApi = useCallback(
//     (id: string | string[]) => {
//       getCompanyById({
//         variables: {
//           id: id,
//         },
//       });
//     },
//     [getCompanyById]
//   );

//   return {
//     getCompanyByIdApi,
//     data,
//     loading,
//     error,
//   };
// };
