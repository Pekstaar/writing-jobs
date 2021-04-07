// import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React from "react";
import "./Welcome.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Create } from "@material-ui/icons";

const Welcome = () => {
  return (
    <div className="welcome">
      <AppBar position="static">
        <Toolbar>
          <div className="logo">
            <span>
              <Create /> Writing
            </span>
            <div className="buttons">
              <Link className="btn" to="/Login">
                Login
              </Link>
              <Link className="btn" to="/Signup">
                Sign Up
              </Link>
            </div>
          </div>

          <ul className="nav__items">
            <li className="nav__item active">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Contacts</li>
          </ul>
        </Toolbar>
      </AppBar>
      <div className="container-fluid welcome__container">
        <div className="wrap">
          <Typical
            loop={Infinity}
            steps={[
              "Hello!",
              2000,
              "Welcome to Online Writers!",
              2000,
              "Click on the button below to signup and get started",
              2000,
            ]}
          />
          <h1>WELCOME TO ONLINE WRITING</h1>
          <p className="my-4">Click On the Button Below to Get started.</p>
          <Link to="/Signup">GET STARTED</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
