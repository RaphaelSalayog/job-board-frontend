import { useLoginMutation } from "@/util/graphql/api-hooks/useLogin";
import { useRouter } from "next/router";
import { useState } from "react";

export const inputStyle = {
  padding: "8px", // Adjust padding according to your preference
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%", // Adjust width as needed
  marginBottom: "1.5rem",
};

export const buttonStyle = {
  padding: "8px 16px", // Adjust padding according to your preference
  borderRadius: "5px",
  backgroundColor: "#1677ff",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { loginHandler } = useLoginMutation();
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%" }}>
          <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>Login</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const { data } = await loginHandler(username, password);
                localStorage.setItem("token", data.login.token);
                router.push("/");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <label
              htmlFor="username"
              style={{
                display: "inline-block",
                marginBottom: "10px",
                width: "6rem",
              }}
            >
              Username
            </label>
            <input
              id="username"
              // type="email"
              style={inputStyle}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label
              htmlFor="password"
              style={{
                display: "inline-block",
                marginBottom: "10px",
                width: "6rem",
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              style={inputStyle}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
