import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../mutations/login";
import { useCallback } from "react";

export const useLoginMutation = () => {
  const [variables, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const loginHandler = useCallback(
    (email: string, password: string) => {
      return variables({
        variables: {
          email: email,
          password: password,
        },
      });
    },
    [variables]
  );

  return {
    loginHandler,
    data,
    loading,
    error,
  };
};
