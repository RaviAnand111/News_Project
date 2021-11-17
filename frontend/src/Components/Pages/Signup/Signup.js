import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router";

function Signup() {
  let navigate = useNavigate();

  const [personalInfo, setPersonalInfo] = useState({
    userID: "",
    email: "",
    password: "",
    fName: "",
    lName: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    admin_user_id: "admin",
  });

  function handleChange(event) {
    var newInput = event.target.value;
    var inputName = event.target.name;

    if (inputName == "firstName") {
      setPersonalInfo((prevValue) => {
        return {
          fName: newInput,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: prevValue.email,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "lastName") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: newInput,
          userID: prevValue.userID,
          email: prevValue.email,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "userId") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: newInput,
          email: prevValue.email,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "dob") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: prevValue.email,
          password: prevValue.password,
          dob: newInput,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "gender") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: prevValue.email,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: newInput,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "phone") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: prevValue.email,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: newInput,
          address: prevValue.address,
        };
      });
    } else if (inputName == "email") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: newInput,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "password") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: prevValue.email,
          password: newInput,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: prevValue.address,
        };
      });
    } else if (inputName == "address") {
      setPersonalInfo((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          userID: prevValue.userID,
          email: prevValue.email,
          password: prevValue.password,
          dob: prevValue.dob,
          gender: prevValue.gender,
          phone: prevValue.phone,
          address: newInput,
        };
      });
    }
  }

  const postClick = (e) => {
    e.preventDefault();

    const {
      userID,
      email,
      password,
      fName,
      lName,
      dob,
      gender,
      phone,
      address,
    } = personalInfo;

    axios
      .post("/newsapi/createuser", personalInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/Login", { replace: true });
  };

  return (
    <section className="">
      <div className="container-fluid h-custom vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
              className="img-fluid img"
              alt="Sample image"
            ></img>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 personal-info">
            <form method="POST">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1 brand-icon"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1 brand-icon"
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

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="form3Example4"
                  name="firstName"
                  className="form-control form-control-lg"
                  placeholder="Enter your First Name"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="form3Example4"
                  name="lastName"
                  className="form-control form-control-lg"
                  placeholder="Enter your Last Name"
                />
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

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Date of Birth
                </label>
                <input
                  onChange={handleChange}
                  type="date"
                  id="form3Example4"
                  name="dob"
                  className="form-control form-control-lg"
                  placeholder="Choose Date of Birth"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Gender
                </label>
                <br />
                <input
                  onChange={handleChange}
                  type="radio"
                  className="radio"
                  name="gender"
                  value="male"
                />
                <label className="gender">Male</label>

                <input
                  onChange={handleChange}
                  type="radio"
                  className="radio"
                  name="gender"
                  value="female"
                />
                <label className="gender">Female</label>

                <input
                  onChange={handleChange}
                  type="radio"
                  className="radio"
                  name="gender"
                  value="other"
                />
                <label className="gender">Other</label>
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  id="form3Example4"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Address
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="form3Example4"
                  name="address"
                  className="form-control form-control-lg"
                  placeholder="Enter your Full Address"
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

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Re-Type Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="form3Example4"
                  name="re-type"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Password Again"
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
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                  onClick={postClick}
                >
                  Signup
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
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary footer">
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

export default Signup;
