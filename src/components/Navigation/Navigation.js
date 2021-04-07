import { Avatar } from "@material-ui/core";
import { AssignmentReturned, Create, Home, Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import firebase from "../../firebase";

const Navigation = () => {
  return (
    <div className="header">
      <div className="nav__logo">
        <h3 style={{ fontSize: "21px" }}>
          <Create /> WRITING
        </h3>
      </div>

      <div className="nav__search">
        <input type="text" className="search__input" placeholder="Search Job" />

        <Search className="search__icon" />
      </div>

      <div className="nav__icons">
        <Home className="nav__icon" />

        <AssignmentReturned className="nav__icon" />

        <div className="nav__profile">
          <Avatar className="avatar" />
          <h5>{firebase.auth().currentUser.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
