import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./SideProfile.css";
import { useAuth } from "../../auth";
import firebase from "../../../firebase";

const Profile = ({ history }) => {
  const { logout } = useAuth();

  const signOut = async (e) => {
    try {
      await logout();
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="profile">
      <div className="profile__card">
        <div className="upper__profile">
          <Avatar className="profile__image" />

          <h3 className="profile__name">
            {firebase.auth().currentUser.displayName}
          </h3>
        </div>

        <ul className="profile__navigation">
          <Link to="/Myprofile" className="profile__item">
            Profile
          </Link>

          <li className="profile__item">Account</li>

          <li className="profile__item">Tasks</li>

          <li className="profile__item">Payout</li>

          <li className="profile__item" onClick={signOut}>
            Logout
          </li>
        </ul>
        <div className="profile__contact">
          {firebase.auth().currentUser.email}
          <br />
          +254 020 367 889
        </div>
      </div>
    </div>
  );
};

export default Profile;
