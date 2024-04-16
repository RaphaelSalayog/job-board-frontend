import Jobs from "@/components/job-list/Jobs";
import { useGetAllJobsQuery } from "@/util/graphql/api-hooks/useGetAllJobs";
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

export default function Home() {
  const { data, loading, error } = useGetAllJobsQuery();

  return (
    <>
      <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>Job Board</p>

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
          data?.getAllJobs?.map((job: IJob) => (
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
