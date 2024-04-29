import Jobs from "@/components/job-list/Jobs";
import { useGetAllJobsQuery } from "@/util/graphql/api-hooks/useGetAllJobs";
import { useState } from "react";
export interface IJob {
  id: string;
  company: ICompany;
  title: string;
  description: string;
  createdAt: string;
}

export interface ICompany {
  id: string;
  name: string;
  description: string;
  jobs: IJob[];
}

const JOBS_PER_PAGE = 2;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * JOBS_PER_PAGE; // offset - what index should it start (currentPage - 1 * limit)
  const { data, loading, error } = useGetAllJobsQuery(JOBS_PER_PAGE, offset);
  const totalPages = Math.ceil(data?.getAllJobs.totalCount / JOBS_PER_PAGE); // Math.ceil() rounds a number up to the next largest integer. (e.g. 3.2 = 4) it round off even the .2 is not >= .5

  return (
    <>
      <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>Job Board</p>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <button
          onClick={() => {
            setCurrentPage((prevState) => prevState - 1);
          }}
          disabled={currentPage === 1}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prev
        </button>
        <span
          style={{ marginRight: "10px", fontSize: "18px", fontWeight: "bold" }}
        >
          {currentPage}
        </span>
        <button
          onClick={() => {
            setCurrentPage((prevState) => prevState + 1);
          }}
          disabled={currentPage === totalPages}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
      <ul
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem",
          listStyleType: "none",
        }}
      >
        {!loading ? (
          data?.getAllJobs?.jobs.map((job: IJob) => (
            <li key={job.id}>
              <Jobs data={job} />
            </li>
          ))
        ) : (
          <p>Loading ... </p>
        )}
      </ul>
    </>
  );
}

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   const query = `
//   query {
//     getAllJobs {
//       id
//       company {
//         id
//         name
//         description
//       }
//       title
//       description
//       createdAt
//     }
//   }
//   `;

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         query: query,
//       }),
//     });
//     const { data } = await response.json();
//     return {
//       props: {
//         data: data.getAllJobs,
//       },
//     };
//   } catch (err) {
//     console.log(error);
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// };
