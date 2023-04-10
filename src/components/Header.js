const Header = () => {
    const coverImage = 'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80'
    return (
      <div>
        <div
          style={{
              height: "10rem",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "grid",
              placeItems: "center",
              backgroundImage: `url(${coverImage})`
          }}
        >
        <div style={{color: "white",textAlign: "center"}}>
          <h1 style={{fontWeight:'bolder'}}>THE COLOR STORE</h1>
        </div>
        </div>
      </div>
    );
  };
  export default Header;