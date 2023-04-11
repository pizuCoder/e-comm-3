export default function HomePage() {
  const coverImg =
    "https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80";

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
          backgroundImage: `url(${coverImg})`,
        }}
      >
        <div style={{ color: "white", textAlign: "center", backgroundColor: 'black', padding: '1rem', borderRadius: '1rem' }}>
          <h1 style={{ fontWeight: "bolder", fontSize: '90px' }}>The COLOR STORE</h1>
        </div>
      </div>
    </div>
  );
}
