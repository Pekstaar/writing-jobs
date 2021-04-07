import {
  AppBar,
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
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
import { useAuth } from "../auth";
import "./Profile.css";

const Profile = ({ history }) => {
  const initialValues = {
    username: "Mary Wangari",
    email: "njerimary@gmail.com",
    contact: "+254 020 290 3445",
    skills: "Html, Css, Word, TypeScripting",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe impedit numquam debitis! Odit veniam id optio, esse ea minima.",
  };

  const { logout } = useAuth();

  const [values, setValues] = useState(initialValues);
  const [readOnly, setReadOnly] = useState(true);
  const [btnName, setBtnName] = useState("");

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
              <Avatar className="nav__item" />
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

      <Container maxWidth="md" className="profile__container">
        <Grid style={{ padding: "2em 2em" }} className="bg" container>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: "1em 2em",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                fontFamily: "Varela Round",
                fontWeight: "bold",
                gap: "1.5em",
              }}
            >
              <h2 style={{ color: "#020f3894", fontSize: "25px" }}>
                MY PROFILE
              </h2>

              <div className="profile__image">
                <Avatar
                  alt="Remy Sharp"
                  src="https://expertphotography.com/wp-content/uploads/2020/08/profile-photos-4.jpg"
                  style={{ width: "150px", height: "150px" }}
                />

                <Avatar
                  style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    bottom: 5,
                    right: "40%",
                    cursor: "pointer",
                    background: "blue",
                  }}
                >
                  <Create />
                </Avatar>
              </div>
              <form
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                action=""
              >
                <TextField
                  id="filled-basic"
                  label="User-name"
                  variant="filled"
                  value={values.username}
                  style={{
                    width: "85%",
                    margin: "1em auto",
                  }}
                  InputProps={{
                    readOnly: readOnly,
                  }}
                />

                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  value={values.email}
                  style={{
                    width: "85%",
                    margin: "1em auto",
                  }}
                  InputProps={{
                    readOnly: readOnly,
                  }}
                />

                <TextField
                  id="filled-basic"
                  label="Contact-number"
                  variant="filled"
                  value={values.contact}
                  style={{
                    width: "85%",
                    margin: "1em auto",
                  }}
                  InputProps={{
                    readOnly: readOnly,
                  }}
                />

                <TextField
                  id="filled-basic"
                  label="My skills"
                  variant="filled"
                  value={values.skills}
                  style={{
                    width: "85%",
                    margin: "1em auto",
                  }}
                  InputProps={{
                    readOnly: readOnly,
                  }}
                />

                <textarea
                  className="description"
                  placeholder="My Description ..."
                  value={values.description}
                  style={{
                    width: "85%",
                    minHeight: "150px",
                    margin: "1em auto",
                    background: "#06002015",
                    color: "#444444",
                  }}
                ></textarea>

                <Button
                  style={{ width: "60%", margin: "1em auto", fontSize: "17px" }}
                  variant="contained"
                  color="primary"
                  default="Edit"
                  onClick={() => {
                    if (readOnly === true) {
                      setBtnName("Update");
                      return setReadOnly(false);
                    }
                    setBtnName("Edit");
                    return setReadOnly(true);
                  }}
                >
                  {btnName ? btnName : "Edit"}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
