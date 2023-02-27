import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import img from "../Profile/img.png";

const Profile = () => {
  const [profile, setProfile] = useState(false);

  return (
    <>
      <div className="container container-fluid">
        <h2 className="mt-5 ml-5">My Profile</h2>
        <div className="row justify-content-around mt-5 user-info">
          <div className="col-12 col-md-3">
            <figure className="avatar avatar-profile">
              <img className="image" src={img} alt="" />
            </figure>
            <a
              href="#"
              id="edit_profile"
              className="btn btn-primary btn-block  my-5"
            >
              Edit Profile
            </a>
          </div>

          <div className="col-12 col-md-5">
            <h4>Full Name</h4>
            <p>Aarti Soni</p>

            <h4>Email Address</h4>
            <p>Aarti@gmail.com</p>

            <a href="/" className="btn  btn-block mt-3 mx-3">
              My Orders
            </a>

            <a href="/" className="btn btn-block mt-3">
              Change Password
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
