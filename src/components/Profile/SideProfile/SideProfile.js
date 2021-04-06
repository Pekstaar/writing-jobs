import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideProfile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__card">
        <div className="upper__profile">
          <Avatar className="profile__image" />

          <h3 className="profile__name">client-username</h3>
        </div>

        <ul className="profile__navigation">
          <li className="profile__item">Profile</li>

          <li className="profile__item">Account</li>

          <li className="profile__item">Tasks</li>

          <li className="profile__item">Payout</li>

          <li className="profile__item">Logout</li>
        </ul>
        <div className="profile__contact">
          useremail@gmail.com
          <br />
          +254 020 367 889
        </div>
      </div>
    </div>
  );
};

export default Profile;
