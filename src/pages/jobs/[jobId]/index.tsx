import { useGetJobById } from "@/util/graphql/api-hooks/useGetJobById";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const jobs = () => {
  const router = useRouter();
  const { jobId } = router.query;
  const { data, loading, error } = useGetJobById(jobId);
  const job = data?.getJobById;

  // useEffect(() => {
  //   if (jobId) {
  //     getJobByIdApi(jobId);
  //   }
  // }, [jobId]);
  return (
    <>
      {!loading ? (
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>
            {data?.title}
          </p>
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
            <p
              style={{ padding: "0.7rem 0" }}
            >{`Posted : ${job?.createdAt}`}</p>
            <p style={{ padding: "0.7rem 0" }}>{job?.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default jobs;

/*
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchJob();
    }
  }, [jobId]);
*/
