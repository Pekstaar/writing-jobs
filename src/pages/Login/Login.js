import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import { useAuth } from "../../components/auth";
import { Home } from "@material-ui/icons";

const Login = ({ history }) => {
  const initialvalues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialvalues);
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(values.email, values.password);

      history.push("/Dashboard");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__cover">
          <form action="" className="login__form" onSubmit={handleSubmit}>
            <span className="head">
              <h2>LOGIN</h2>
              <Link className="link" to="/">
                <Home className="home" />
                HOME
              </Link>
            </span>
            <input
              type="text"
              name="email"
              placeholder="username@example.com"
              autoFocus
              required
              value={values.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />

            <div className="manage">
              <span className="one">
                <input type="checkbox" name="remember" id="" /> remember me
              </span>
              <Link to="/Forgotpassword">Forgot Password?</Link>
            </div>

            <button type="submit">Login</button>

            <span>
              Have no account? <Link to="/Signup"> SIGN-UP</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
