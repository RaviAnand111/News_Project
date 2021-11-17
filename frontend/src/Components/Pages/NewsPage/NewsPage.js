import React, { useEffect, useState } from "react";
import Navbar from "../../PageComponents/Navbar/Navbar";

const NewsPage = () => {
  const [backButtonPressed, setBackButtonPressed] = useState(false);

  useEffect(() => {
    window.onpopstate = () => {};
  }, [backButtonPressed]);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default NewsPage;
