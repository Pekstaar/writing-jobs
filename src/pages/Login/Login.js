import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const initialvalues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialvalues);
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__cover">
          <form action="" className="login__form" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input
              type="text"
              name="email"
              placeholder="username@example.com"
              value={values.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />

            <div className="manage">
              <span className="one">
                <input type="checkbox" name="remember" id="" /> remember me
              </span>
              <Link to="/sign-up">Forgot Password?</Link>
            </div>

            <button type="submit">Login</button>

            <span>
              Have no account? <Link to="/sign-up"> SIGN-UP</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
