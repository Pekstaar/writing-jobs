import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideProfile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__Card">
        <div className="upper__profile">
          <Avatar className="profile__image" />
        </div>

        <div className="profile__navigation"></div>

        <div className="profile__contact"></div>
      </div>
    </div>
  );
};

export default Profile;
