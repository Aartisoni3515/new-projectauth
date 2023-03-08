import { useState } from "react";
import "./SignUp.css";
import { FileImageOutlined } from "@ant-design/icons";

// import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

 
  const handleSubmit = (e) => {
    console.log("signup");
    axios
      .post("/signin", {
        userName,
        email,
        password,
      })

      .then(function (response) {
        if (response.data.redirect === "/signin") {
          window.location = "/home";
        } else if (response.data.redirect === "/signin") {
          window.location = "/signin";
        }
      })
      .catch(function (error) {
        window.location = "/home";
      });

    e.preventDefault();
    console.log(userName, email, password);
    const userData = {
      userName,
      email,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData));
    setIsLoggedin(true);
    setuserName("");
    setEmail("");
    setPassword("");

    if (userName === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {userName} successfully registered!!</h1>
      </div>
    );
  };

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="form">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div
          className="container"
          style={{ textAlign: "center", height: "400px" }}
        >
          <h1>Sign In</h1>
          {!isLoggedin ? (
            <>
              <form
                style={{
                  background: "white",
                  width: "100%",
                  marginTop: "50px",
                }}
                action=""
              >
                <input
                  style={{ width: "60%", padding: "10px 20px" }}
                  type="text"
                  onChange={(e) => setuserName(e.target.value)}
                  value={userName}
                  placeholder="Name"
                />{" "}
                <br />
                <br />
                <input
                  style={{ width: "60%", padding: "10px 20px" }}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />{" "}
                <br /> <br />
                <input
                  style={{ width: "60%", padding: "10px 20px" }}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />{" "}
                <br /> <br />
                <input
                  required
                  type="file"
                  style={{ display: "none" }}
                  id="file"
                />
                <label htmlFor="file">
                  <img src="" alt="" />
                  <span>
                    {" "}
                    <FileImageOutlined /> Add profile
                  </span>
                </label>{" "}
                <br /> <br />
                <button className="button" type="submit" onClick={handleSubmit}>
                  Signin
                </button>
              </form>
            </>
          ) : (
            <>
              <h1>User is logged in</h1>
              <button onClickCapture={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default SignIn;
