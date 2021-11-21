import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import { ProfileContext } from "../../../Context/ProfileContext";

function Login() {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useContext(ProfileContext);

  const [adminCredentials, setAdminCredentials] = useState({
    user_id: "",
    password: "",
  });

  function handleChange(event) {
    var newInput = event.target.value;
    var inputName = event.target.name;

    if (inputName === "user_id") {
      setAdminCredentials((prevValue) => {
        return {
          user_id: newInput,
          password: prevValue.password,
        };
      });
    } else if (inputName === "password") {
      setAdminCredentials((prevValue) => {
        return {
          user_id: prevValue.user_id,
          password: newInput,
        };
      });
    }
  }

  const postClick = async (e) => {
    e.preventDefault();

    //fetch request to login

    const { user_id, password } = adminCredentials;

    const response = await fetch("http://localhost:8080/newsapi/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user_id, password: password }),
    });

    const json = await response.json();

    // if fetch is success: true then make a fetch request to /getuser route to get user data by sending authtoken in headers of request

    if (json.success) {
      localStorage.setItem("admintoken", json.authToken);
      navigate("/AdminNewsPage", { replace: true });
    } else {
      alert(json.error);
      navigate("/", { replace: true });
    }
  };

  return (
    <section className="">
      <div className="container-fluid h-custom vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
              className="img-fluid"
              alt="Sample image"
            ></img>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={postClick}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Admin Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1  brand-icon"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1   brand-icon"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1 brand-icon"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* <!-- user_id input --> */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  User ID
                </label>
                <input
                  onChange={handleChange}
                  type="user_id"
                  id="form3Example3"
                  name="user_id"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid user_id address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="form3Example4"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              {/* <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                </div>
                <a href="#!" className="text-body forgot">
                  Forgot password?
                </a>
              </div> */}

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={postClick}
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* <!-- Copyright --> */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        {/* <!-- Copyright --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="#!" className="text-white me-4">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#!" className="text-white me-4">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#!" className="text-white me-4">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#!" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        {/* <!-- Right --> */}
      </div>
    </section>
  );
}

export default Login;
