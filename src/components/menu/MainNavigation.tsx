import ComponentWrapper from "@/util/ComponentWrapper";
import Link from "next/link";

const MainNavigation: React.FC<any> = ({ children }) => {
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
          <li key={"login"}>
            <Link
              href={"/login"}
              style={{ textDecoration: "none", color: "#1890ff" }}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <ComponentWrapper>{children}</ComponentWrapper>
      </main>
    </>
  );
};

export default MainNavigation;
