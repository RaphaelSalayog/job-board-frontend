import ComponentWrapper from "@/util/ComponentWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainNavigation: React.FC<any> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage?.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [router.pathname]);
  return (
    <>
      <nav style={{ position: "fixed", width: "100%" }}>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-between",
            padding: "2rem 3rem",
          }}
        >
          <li key={"home"}>
            <Link
              href={"/"}
              style={{ textDecoration: "none", color: "#1890ff" }}
            >
              Home
            </Link>
          </li>
          <div style={{ display: "flex" }}>
            {isAuth && (
              <>
                <p style={{ marginRight: "3rem" }}>Raphael</p>
                <li key={"addPost"} style={{ marginRight: "3rem" }}>
                  <Link
                    href={"/add-post"}
                    style={{ textDecoration: "none", color: "#1890ff" }}
                  >
                    Post Job
                  </Link>
                </li>
              </>
            )}
            <li key={"login"}>
              <Link
                href={"/login"}
                onClick={() => {
                  if (isAuth) {
                    localStorage.removeItem("token");
                  }
                }}
                style={{ textDecoration: "none", color: "#1890ff" }}
              >
                {isAuth ? "Logout" : "Login"}
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <main>
        <ComponentWrapper>{children}</ComponentWrapper>
      </main>
    </>
  );
};

export default MainNavigation;
