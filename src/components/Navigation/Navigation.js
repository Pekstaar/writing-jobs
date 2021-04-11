import { AppBar, Avatar, Toolbar } from "@material-ui/core";
import {
  AssignmentReturned,
  Create,
  ExitToApp,
  Home,
  Notifications,
  Search,
  Work,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import firebase from "../../firebase";
import { useAuth } from "../auth";

const Navigation = ({ history }) => {
  const { logout } = useAuth();

  return (
    <div className="header">
      <AppBar position="static" style={{ backgroundColor: "#05001b13" }}>
        <Toolbar>
          <div className="logo">
            <span>
              <Create /> Writing
            </span>
            {/*  */}
          </div>

          <div className="nav__search">
            <input
              type="text"
              className="search__input"
              placeholder="Search Job"
            />

            <Search
              style={{
                background: "white",
                marginLeft: "3px",
                borderRadius: "0 1em 1em 0",
              }}
              className="search__icon"
            />
          </div>

          {/* Navigation icons */}
          <ul className="nav__items">
            <Link to="/Dashboard" className="nav__item active">
              <Home className="icon" />
            </Link>

            <Link>
              <Work className="icon" />
            </Link>
            <Link to="/Notifications">
              <Notifications className="icon" />
            </Link>
            <span>
              <Link to="/Myprofile" style={{ cursor: "pointer" }}>
                <Avatar className="nav__item" />
              </Link>
            </span>
            <Link
              className="nav__item"
              onClick={async () => {
                await logout()
                  .then(() => history.push("/"))
                  .catch((e) => console.log(e.message));
              }}
            >
              <ExitToApp className="icon" /> Logout
            </Link>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
