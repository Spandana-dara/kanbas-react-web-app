import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <br></br>
      {error && <div style={{color:"red"}}>{error}</div>}
      <br></br>
      <label>Username</label>
      <input
        value={credentials.username}
        className="form-control" 
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />

          <br></br>
          <label>Password</label>
      <input
        value={credentials.password}
        className="form-control" 
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
          <br></br>
      <button onClick={signup} type="button" class="btn btn-primary">
        Signup
      </button>
    </div>
  );
}
export default Signup;

