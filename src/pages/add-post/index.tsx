import { useRouter } from "next/router";
import { buttonStyle, inputStyle } from "../login";
import { useState } from "react";
import { useCreateJob } from "@/util/graphql/api-hooks/useCreateJob";

const addPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { createJobHandler } = useCreateJob();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = { title, description };
    const result = await createJobHandler(input);
    if (result) {
      router.push("/");
    }
  };

  return (
    <>
      <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>New Job</p>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          listStyleType: "none",
        }}
      >
        <form onSubmit={submitHandler}>
          <label
            htmlFor="title"
            style={{
              display: "inline-block",
              marginBottom: "10px",
              width: "6rem",
            }}
          >
            Title
          </label>
          <input
            id="title"
            style={inputStyle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label
            htmlFor="description"
            style={{
              display: "inline-block",
              marginBottom: "10px",
              width: "6rem",
            }}
          >
            Description
          </label>
          <textarea
            id="description"
            style={{ ...inputStyle, height: "10rem", resize: "none" }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button type="submit" style={buttonStyle}>
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default addPost;

/*
const mutation = `
      mutation createJob($input: CreateJobInput!) {
        createJob(input: $input) {
          id
          company {
            id
            name
            description
          }
          title
          description
          createdAt
        }
      }
    `;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: mutation,
          variables: {
            input: {
              title: title,
              description: description,
            },
          },
        }),
      });

      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
*/
