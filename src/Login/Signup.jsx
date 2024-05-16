import { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [notice, setNotice] = useState("");

  const actionCodeSettings = {
    url: "http://localhost:5173/confirm",
    handleCodeInApp: true,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof phNo !== "string" || phNo.length !== 10 || !/^\d+$/.test(phNo)) {
      setNotice("Invalid email address or phone number.");
      return;
    }

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
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter a username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
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

          <label>Phone Number</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Enter your phone number"
            required
            onChange={(e) => setPhNo(e.target.value)}
            value={phNo}
          />

          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <div className="to-second-page">
          <p>Existing User?</p>
          <p className="second-page-link">
            <Link to={"/"}>Login</Link>
          </p>
        </div>
        {notice !== "" && <div className="alert">{notice}</div>}
      </div>
    </div>
  );
};

export default SignUp;
