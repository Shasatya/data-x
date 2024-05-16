import { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const actionCodeSettings = {
    url: "http://localhost:5173/confirm",
    handleCodeInApp: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      setNotice(
        "An email was sent to your email address. Click the link in the email to login."
      );
    } catch (error) {
      console.error("Error sending email link:", error);
      setNotice(
        `An error occurred: ${error.message}. Please check your internet connection or try again later.`
      );
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="to-second-page">
          <p>New User?</p>
          <p className="second-page-link">
            <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      {notice !== "" && <div className="alert">{notice}</div>}
      </div>
    </div>
  );
};

export default Login;
