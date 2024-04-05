import { jobsData } from "@/pages";
import Link from "next/link";
import { useRouter } from "next/router";

const jobs = () => {
  const router = useRouter();
  const { jobId } = router.query;

  const jobData = jobsData.find((job) => job.id === jobId);
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>
          {jobData?.job}
        </p>
        <Link
          href={`/companies/${jobData?.company.id}`}
          style={{ textDecoration: "none", color: "#1890ff" }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            {jobData?.company.name}
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
          <p style={{ padding: "0.7rem 0" }}>{`Posted : ${jobData?.date}`}</p>
          <p style={{ padding: "0.7rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            corporis ab doloremque sint cum, cumque expedita exercitationem
            aliquid voluptates earum? Sapiente, id excepturi. Iure ratione
            doloribus debitis ea non eveniet!
          </p>
        </div>
      </div>
    </>
  );
};

export default jobs;
