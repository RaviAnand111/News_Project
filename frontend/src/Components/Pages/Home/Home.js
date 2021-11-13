import React from "react";
import HomeNavbar from "../../PageComponents/HomeNavbar/HomeNavbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <HomeNavbar />
      <div className="news-heading">
        <p className="news-content"> News from all around the world</p>
      </div>
    </div>
  );
}

export default Home;
