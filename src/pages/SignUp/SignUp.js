import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import "./SignUp.css";

import { useAuth } from "../../components/auth";
import { Home } from "@material-ui/icons";

const Signup = ({ history }) => {
  const initialvalues = {
    email: "",
    password: "",
    username: "",
  };

  const [values, setValues] = useState(initialvalues);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, setName } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //   Check if empty fields
    if (values.email !== "" && values.password !== "") {
      // Check password length
      if (values.password.length > 3) {
        //   check if passwords match
        if (values.password !== confirmPassword) {
          NotificationManager.error("Passwords don't Match", "Error!", 3000);
        } else {
          // console.log(values);
          try {
            setLoading(true);

            await signup(values.email, values.password);

            await setName(values.username);

            NotificationManager.success("Account Created!", "Success!", 3000);

            history.push("/Dashboard");
          } catch (error) {
            console.error(error);
            // NotificationManager.error(error, "Error!", 3000);
          }

          setLoading(false);
        }
      } else {
        NotificationManager.error(
          "Password Too short",
          "Short Password!",
          3000
        );
      }
    } else {
      NotificationManager.error(
        "Please Ensure all Fields are filled",
        "Empty Fields!",
        3000
      );
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__cover">
          <form action="" className="signup__form" onSubmit={handleSubmit}>
            <span className="head">
              <h2>SIGN UP</h2>
              <Link className="link" to="/">
                <Home className="home" />
                HOME
              </Link>
            </span>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoFocus
              required
              value={values.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="username@example.com"
              required
              value={values.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={values.password}
              onChange={handleChange}
            />

            <input
              type="password"
              name="c_password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="manage">
              <span className="one">
                <input type="checkbox" name="remember" id="" /> remember me
              </span>
            </div>

            <button type="submit">SIGNUP</button>

            <span>
              Already a member? <Link to="/Login"> SIGN IN</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
