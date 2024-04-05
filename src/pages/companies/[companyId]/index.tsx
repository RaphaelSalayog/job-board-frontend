import { jobsData } from "@/pages";
import { useRouter } from "next/router";

const companies = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const company = jobsData.find((job) => job.company.id === companyId)?.company;
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
        <p style={{ padding: "0.7rem 0" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          corporis ab doloremque sint cum, cumque expedita exercitationem
          aliquid voluptates earum? Sapiente, id excepturi. Iure ratione
          doloribus debitis ea non eveniet!
        </p>
      </div>
    </>
  );
};

export default companies;
