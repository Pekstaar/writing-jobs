import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

import { useAuth } from "../../components/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");

  const { resetPassword } = useAuth();

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = "";

    try {
      setLoading(true);

      await resetPassword(email);
      message = "Please check your account for futher instructions.";

      NotificationManager.success(message, "Sent!", 5000);
    } catch (e) {
      //   console.log(e.message);
      NotificationManager.error(e.message, "Failed!", 3000);
    }

    setLoading(false);
  };

  return (
    <div className="forgotpwd">
      <div className="forgotpwd__container">
        <div className="forgotpwd__cover">
          <form action="" className="forgotpwd__form" onSubmit={handleSubmit}>
            <h2>FORGOT PASSWORD?</h2>

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              autoFocus
              required
              value={email}
              onChange={handleChange}
            />

            <button type="submit">SUBMIT</button>

            <span>
              <Link to="/Login"> LOGIN</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
