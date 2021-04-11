import {
  AppBar,
  Avatar,
  Container,
  Grid,
  Paper,
  Toolbar,
} from "@material-ui/core";
import {
  Create,
  ExitToApp,
  Home,
  Notifications,
  Work,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/auth";
// import "./MyNotifications.css";

const MyNotifications = ({ history }) => {
  const { logout } = useAuth();

  return (
    <div className="main__profile">
      <AppBar position="static">
        <Toolbar>
          <div className="logo">
            <span>
              <Create /> Writing
            </span>
            {/*  */}
          </div>

          {/* Navigation icons */}
          <ul className="nav__items">
            <Link to="/Dashboard" className="nav__item active">
              <Home className="icon" />
            </Link>

            <Link>
              <Work className="icon" />
            </Link>
            <Link>
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

      <Container maxWidth="md" className="notifications__container">
        <Grid style={{ padding: "2em 2em" }} className="bg" container>
          <Grid style={{ display: "flex", alignItems: "center" }} item xs={12}>
            <Paper
              style={{
                padding: "1em 0",
                margin: "auto",
                width: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                fontFamily: "Varela Round",
                fontWeight: "bold",
                gap: "1.5em",
                borderRadius: ".5em",
              }}
            >
              <div className="notification_head">
                <h2 style={{ color: "#020f3894", fontSize: "25px" }}>
                  MY MESSAGES
                </h2>

                <Avatar
                  alt="Remy Sharp"
                  src="https://expertphotography.com/wp-content/uploads/2020/08/profile-photos-4.jpg"
                  style={{ width: "40", height: "40px" }}
                />
              </div>

              <div className="my__notification"></div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MyNotifications;
