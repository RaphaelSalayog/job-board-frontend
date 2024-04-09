import { IJob } from "@/pages";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const jobs = () => {
  const [job, setJob] = useState<IJob>();
  const router = useRouter();
  const { jobId } = router.query;

  const fetchJob = async () => {
    const query = `
      query getJobById($id: ID!) {
        getJobById(id: $id) {
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
      const response = await fetch(`http://localhost:8080/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query,
          variables: {
            id: jobId,
          },
        }),
      });

      const { data } = await response.json();
      setJob(data.getJobById);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>{job?.title}</p>
        <Link
          href={`/companies/${job?.company.id}`}
          style={{ textDecoration: "none", color: "#1890ff" }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            {job?.company.name}
          </p>
        </Link>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
          }}
        >
          <p style={{ padding: "0.7rem 0" }}>{`Posted : ${job?.createdAt}`}</p>
          <p style={{ padding: "0.7rem 0" }}>{job?.description}</p>
        </div>
      </div>
    </>
  );
};

export default jobs;
