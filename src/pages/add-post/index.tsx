import { buttonStyle, inputStyle } from "../login";
import { useState } from "react";

const addPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title + " " + description);
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
