import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2>
          Welcome <p className="email-text">{auth.currentUser.email} </p>
          You are logged In!
        </h2>
        <button
          type="submit"
          className="logout-button"
          onClick={(e) => logoutUser(e)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
