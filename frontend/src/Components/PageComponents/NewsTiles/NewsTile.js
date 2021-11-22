import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./NewsTiles.css";

const NewsTile = (props) => {
  let { id, title, description, newsUrl, imageUrl, author, date, source } =
    props;
  let navigate = useNavigate();

  const deletenews = async () => {
    try {
      const response = await fetch("http://localhost:8080/newsapi/deletenews", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("admintoken"),
        },
        body: JSON.stringify({ id: id }),
      });

      const json = await response.json();
      console.log(json);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on &nbsp;
              {new Date().toGMTString()}
            </small>
          </p>
          {props.admin && (
            <div className="trash-div" onClick={deletenews}>
              <FontAwesomeIcon
                className="trash-icon"
                icon={faTrash}
                size="2x"
              />
            </div>
          )}
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-lg btn-success read-more"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsTile;
