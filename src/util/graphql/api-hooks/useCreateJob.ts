import { useMutation } from "@apollo/client";
import { CREATE_JOB_MUTATION } from "../mutations/createJob";
import { useCallback } from "react";

export const useCreateJob = () => {
  const [variables, { data, loading, error }] =
    useMutation(CREATE_JOB_MUTATION);

  const createJobHandler = useCallback(
    (input: { title: string; description: string }) => {
      return variables({
        variables: {
          input: input,
        },
      });
    },
    []
  );

  return {
    createJobHandler,
    data,
    loading,
    error,
  };
};
