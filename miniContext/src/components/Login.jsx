import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  cosnt[(username, setusername)] = useState("");
  cosnt[(password, setpassword)] = useState("");

  const { setUser } = useContext(UserContext);

  const handlesubmit = () => {};
  return (
    <div>
      <h1>Login</h1>;
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handlesubmit} Submit></button>
    </div>
  );
}

export default Login;
