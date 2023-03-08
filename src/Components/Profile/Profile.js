import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import img from "../Profile/img.png";
// import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [profile, setProfile] = useState(false);

  return (
    <>
      <div className="container container-fluid">
        <h2 className="mt-5 ml-5">My Profile</h2>
        <div className="row justify-content-around mt-5 user-info">
          <div className="col-12 col-md-3">
            <div className="avatar avatar-profile">
              <img className="image" src={img} alt="" />
            </div>
            <button
              href="/"
              id="edit_profile"
              className="btn btn-primary btn-block  my-5"
            >
              Edit Profile
            </button>
          </div>

          <div className="col-12 col-md-5">
            <h4>Full Name</h4>
            <p>Aarti Soni</p>

            <h4> Email </h4>
            <p> aarti@23gamil.com </p>
            <div></div>
            <button className="btn"> My orders</button>
            <button className="btn">Change Password</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
