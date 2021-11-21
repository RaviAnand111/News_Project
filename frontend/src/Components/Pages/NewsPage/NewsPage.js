import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import NewsNavbar from "../../PageComponents/NewsNavbar/NewsNavbar";
import NewsTile from "../../PageComponents/NewsTiles/NewsTile";

const NewsPage = () => {
  let navigate = useNavigate();
  const [news, setNews] = useState([]);

  const [category, setCategory] = useState("general");

  const fetchnews = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/newsapi/fetchnews/${category}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const json = await response.json();
      setNews(json);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchnews();
  }, [category]);

  return (
    <div>
      <NewsNavbar setCategory={setCategory} admin={false} />
      <div className="container">
        <div className="row">
          {news.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsTile
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.url_to_image}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
