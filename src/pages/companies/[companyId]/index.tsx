import Jobs from "@/components/job-list/Jobs";
import { ICompany } from "@/pages";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const companies = () => {
  const [company, setCompany] = useState<ICompany | null>();
  const router = useRouter();
  const { companyId } = router.query;

  const fetchJob = async () => {
    const query = `
    query getCompanyById($id: ID!) {
      getCompanyById(id: $id) {
        id
        name
        description
        jobs  {
          id
          title
          description
          createdAt
        }
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
            id: companyId,
          },
        }),
      });

      const { data } = await response.json();
      setCompany(data.getCompanyById);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (companyId) {
      fetchJob();
    }
  }, [companyId]);

  return (
    <>
      <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>{company?.name}</p>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
        }}
      >
        <p style={{ padding: "0.7rem 0" }}>{company?.description}</p>
      </div>
      <p
        style={{ fontSize: "2rem", margin: "1rem 0" }}
      >{`Jobs at ${company?.name}`}</p>
      <ul
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          listStyleType: "none",
        }}
      >
        {company?.jobs.map((job) => (
          <li key={job.id}>
            <Jobs data={job} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default companies;
