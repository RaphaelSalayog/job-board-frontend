import { Inter } from "next/font/google";
import Jobs from "@/components/job-list/Jobs";
import { GetServerSidePropsContext } from "next";
import { gql } from "@apollo/client";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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

export const jobsData = [
  {
    id: "123",
    date: "21 Jan 2023",
    job: "Job 1",
    company: {
      id: "c123",
      name: "Company A",
    },
  },
  {
    id: "456",
    date: "22 Jan 2023",
    job: "Job 2",
    company: {
      id: "c456",
      name: "Company B",
    },
  },
];

export default function Home({ data }: { data: IJob[] }) {
  const [jobs, setJobs] = useState(data);
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
        {jobs.map((job) => (
          <li key={job.id}>
            <Jobs data={job} />
          </li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = `
  query {
    getAllJobs {
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
    const response = await fetch(`${process.env.API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: query,
      }),
    });
    const { data } = await response.json();
    return {
      props: {
        data: data.getAllJobs,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
      },
    };
  }
};
