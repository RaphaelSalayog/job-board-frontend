import { IJob } from "@/pages";
import Link from "next/link";

const Jobs = ({ data }: { data: IJob }) => {
  const { id, createdAt, title, company } = data;
  return (
    <>
      <div style={{ display: "flex", padding: "0.7rem 0" }}>
        <p style={{ marginRight: "1rem" }}>{createdAt}</p>
        <Link
          href={`/jobs/${id}`}
          style={{ textDecoration: "none", color: "#1890ff" }}
        >
          <p>{company?.name ? `${title} at ${company?.name}` : title}</p>
        </Link>
      </div>

      {/* <hr style={{ margin: "0.5rem 0" }} /> */}
    </>
  );
};
export default Jobs;
