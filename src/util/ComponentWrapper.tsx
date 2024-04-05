const ComponentWrapper: React.FC<any> = ({ children }) => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "60%", marginTop: "5rem" }}>{children}</div>
      </div>
    </>
  );
};

export default ComponentWrapper;
