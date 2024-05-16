import Confirm from "./Confirm/Confirm.jsx";
import Profile from "./Profile/Profile.jsx";
import Login from "./Login/Login.jsx";
import SignUp from "./Login/Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/confirm" element={<Confirm></Confirm>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
