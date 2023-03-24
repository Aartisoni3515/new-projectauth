import axios from "axios";
import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (props) => {
    console.log("signup");
    axios
      .post("/signup", {
        userName,
        firstName,
        lastName,
        email,
        mobile,
        password,
      })

      .then(function (response) {
        const { token } = response.data;
        localStorage.setItem("token", token);

        if (response.data.redirect === "/") {
          window.location = "/index";
        } else if (response.data.redirect === "/signup") {
          window.location = "/signup";
        }
      })
      .catch(function (error) {
        window.location = "/signin";
      });
  };

  return (
    <>
      <div className="container">
        <h2>Sign Up</h2>
        <input
          placeholder={"userName"}
          type={"text"}
          onChange={(e) => setUserName(e.target.value)}
          name={"userName"}
          value={userName}
        />{" "}
        <br /> <br />
        <input
          placeholder={"firstName"}
          type={"text"}
          onChange={(e) => setFirstName(e.target.value)}
          name={"firstName"}
          value={firstName}
        />{" "}
        <br /> <br />
        <input
          placeholder={"lastName"}
          type={"text"}
          onChange={(e) => setLastName(e.target.value)}
          name={"lastName"}
          value={lastName}
        />{" "}
        <br /> <br />
        <input
          placeholder={"mobile"}
          type={"number"}
          onChange={(e) => setMobile(e.target.value)}
          name={"mobile"}
          value={mobile}
        />{" "}
        <br /> <br />
        <input
          placeholder={"email"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          name={"email"}
          value={email}
        />{" "}
        <br /> <br />
        <input
          placeholder={"password"}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          name={"password"}
          value={password}
        />{" "}
        <br /> <br />
        <button className="button" onClick={() => handleSignup()}>
          Signup
        </button>
        <p>
          already have an account ? <Link to="/Signin"> Sign in</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
