import { useMutation } from "@apollo/client";
import { CREATE_JOB_MUTATION } from "../mutations/createJob";

export const useCreateJob = () => {
  const [variables, { data, loading, error }] =
    useMutation(CREATE_JOB_MUTATION);

  const createJobHandler = (input: { title: string; description: string }) => {
    variables({
      variables: {
        input: input,
      },
    });
  };

  return {
    createJobHandler,
    data,
    loading,
    error,
  };
};
