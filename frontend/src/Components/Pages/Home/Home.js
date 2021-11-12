import React from "react";
import Navbar from "../../PageComponents/Navabar/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="news-heading">
        <p className="news-content"> News from all around the world</p>
      </div>
    </div>
  );
}

export default Home;
