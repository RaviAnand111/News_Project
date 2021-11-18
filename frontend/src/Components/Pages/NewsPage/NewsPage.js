import React, { useEffect, useState } from "react";
import Navbar from "../../PageComponents/Navbar/Navbar";
import NewsTile from "../../PageComponents/NewsTiles/NewsTile";
import "./NewsPage.css";

const NewsPage = () => {
  const [backButtonPressed, setBackButtonPressed] = useState(false);

  useEffect(() => {
    window.onpopstate = () => {};
  }, [backButtonPressed]);

  return (
    <div>
      <Navbar />
      <div className="grid">
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
        <NewsTile className="grid__item" />
      </div>
    </div>
  );
};

export default NewsPage;
