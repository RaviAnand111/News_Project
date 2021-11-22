import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./AddNews.css";

const AddNews = (props) => {
  const [newsInfo, setNewsInfo] = useState({
    title: "",
    description: "",
    url: "",
    url_to_image: "",
    category_id: "",
    name: "",
    author: "",
    country: "",
    city: "",
  });

  const {
    title,
    description,
    url,
    url_to_image,
    category_id,
    name,
    author,
    country,
    city,
  } = newsInfo;

  function handleChange(event) {
    var newInput = event.target.value;
    var inputName = event.target.name;

    if (inputName === "title") {
      setNewsInfo((prevValue) => {
        return {
          title: newInput,
          description: prevValue.description,
          url: prevValue.url,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "description") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: newInput,
          url: prevValue.url,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "url") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: newInput,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "url_to_image") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: prevValue.url,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: newInput,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "category_id") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: prevValue.url,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: parseInt(newInput),
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "name") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: prevValue.url,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: newInput,
          city: prevValue.city,
        };
      });
    } else if (inputName === "author") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: prevValue.url,
          author: newInput,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "country") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: prevValue.url,
          author: prevValue.author,
          country: newInput,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: prevValue.city,
        };
      });
    } else if (inputName === "city") {
      setNewsInfo((prevValue) => {
        return {
          title: prevValue.title,
          description: prevValue.description,
          url: prevValue.url,
          author: prevValue.author,
          country: prevValue.country,
          url_to_image: prevValue.url_to_image,
          category_id: prevValue.category_id,
          name: prevValue.name,
          city: newInput,
        };
      });
    }
  }

  const addnews = async () => {
    try {
      const response = await fetch("http://localhost:8080/newsapi/addnews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("admintoken"),
        },
        body: JSON.stringify({
          title: title,
          description: description,
          url: url,
          url_to_image: url_to_image,
          category_id: category_id,
          name: name,
          author: author,
          country: country,
          city: city,
        }),
      });

      const json = await response.json();
    } catch (error) {
      console.log(error);
    }
    props.showNewsModal(false);
  };

  return (
    <div className="background">
      <Modal show={props.showNews}>
        <Modal.Header
          closeButton
          onClick={() => {
            // setShowNewsModal(false);
            props.showNewsModal(false);
          }}
        >
          <Modal.Title>Add the News</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 1100 }}>
          <section className="">
            <div className="container-fluid h-custom vh-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                {/* <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                    className="img-fluid img"
                    alt="Sample image"
                  ></img>
                </div> */}
                <div
                  className="col-md col-lg col-xl-4 offset-xl-1 personal-info"
                  style={{ width: "550px", marginLeft: "0" }}
                >
                  <form method="POST">
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Title
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example4"
                        name="title"
                        className="form-control form-control-lg"
                        placeholder="Enter Title"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Description
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example4"
                        name="description"
                        className="form-control form-control-lg"
                        placeholder="Enter Description"
                      />
                    </div>

                    {/* <!-- author input --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Author
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example3"
                        name="author"
                        className="form-control form-control-lg"
                        placeholder="Enter the Author Name"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        URL
                      </label>
                      <input
                        onChange={handleChange}
                        type="url"
                        id="form3Example4"
                        name="url"
                        className="form-control form-control-lg"
                        placeholder="Enter Url"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        URL of Image
                      </label>
                      <input
                        onChange={handleChange}
                        type="url"
                        id="form3Example4"
                        name="url_to_image"
                        className="form-control form-control-lg"
                        placeholder="Enter Url of Image"
                      />
                    </div>

                    <label className="form-label" htmlFor="form3Example4">
                      Category
                    </label>
                    <br />

                    <select
                      onChange={handleChange}
                      name="category_id"
                      className="form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option value="1">Business</option>
                      <option value="2">Entertainment</option>
                      <option defaultValue value="3">
                        General
                      </option>
                      <option value="4">Health</option>
                      <option value="5">Science</option>
                      <option value="6">Sports</option>
                      <option value="7">Technology</option>
                    </select>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Name
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example4"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter Name"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Author
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example4"
                        name="author"
                        className="form-control form-control-lg"
                        placeholder="Enter the Author"
                      />
                    </div>

                    {/* <!-- country input --> */}
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Country
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example4"
                        name="country"
                        className="form-control form-control-lg"
                        placeholder="Enter the Country"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        City
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="form3Example4"
                        name="city"
                        className="form-control form-control-lg"
                        placeholder="Enter the City"
                      />
                    </div>

                    <div className="text-center text-lg-start add-btn pt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: 15, paddingRight: 15 }}
                        onClick={addnews}
                      >
                        Add News
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddNews;
