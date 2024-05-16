import { useState } from "react";
import { auth } from "../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const callSignInWithEmailLink = (e) => {
    e.preventDefault();

    if (isSignInWithEmailLink(auth, window.location.href)) {
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          navigate("/profile");
        })
        .catch((error) => {
          setNotice("An occurred during sign in: ", error.name);
        });
    }
  };

  console.log(notice);

  return (
    <>
      <div className="login-overlay">
        <div className="login-container">
          <h2>Confirm your Email</h2>
          <form action="" onSubmit={(e) => callSignInWithEmailLink(e)}>
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
              Confirm
            </button>
          </form>
          {notice !== "" && <div className="alert">{notice}</div>}
        </div>
      </div>
    </>
  );
};

export default Confirm;
