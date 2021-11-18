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
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useContext(ProfileContext);
  console.log(userProfile);

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    var newInput = event.target.value;
    var inputName = event.target.name;

    if (inputName == "email") {
      setLoginCredentials((prevValue) => {
        return {
          email: newInput,
          password: prevValue.password,
        };
      });
    } else if (inputName == "password") {
      setLoginCredentials((prevValue) => {
        return {
          email: prevValue.email,
          password: newInput,
        };
      });
    }
  }

  const postClick = async (e) => {
    e.preventDefault();

    //fetch request to login

    const { email, password } = loginCredentials;

    const response = await fetch("http://localhost:8080/newsapi/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const json = await response.json();

    // if fetch is success: true then make a fetch request to /getuser route to get user data by sending authtoken in headers of request

    if (json.success) {
      localStorage.setItem("token", json.authToken);

      const userFetch = await fetch("http://localhost:8080/newsapi/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": json.authToken,
        },
      });

      const userData = await userFetch.json();

      // after getting userdata in userData variable copy the value in userProfile context in context api ProfileContext by using setState function setUserProfile

      setUserProfile((prevProfile) => ({
        email: userData.email,
        f_name: userData.f_name,
        l_name: userData.l_name,
        dob: userData.dob,
        gender: userData.gender,
        phone: userData.phone,
        address: userData.address,
      }));

      navigate("/NewsPage", { replace: true });
    } else {
      alert(json.error);
      navigate("/Login", { replace: true });
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
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="form3Example3"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
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

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body forgot">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={postClick}
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
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
