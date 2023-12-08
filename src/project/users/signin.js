import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }

  };
  return (
    <div>
      <h1>Signin</h1>
      <br></br>
      {error && <div style={{color:"red"}}>{error}</div>}
      <br></br>
      <label>Username</label>
      <input value={credentials.username} style={{maxWidth:250}} className="form-control" onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <br></br>
      <label>Password</label>
      <input value={credentials.password} style={{maxWidth:250}} className="form-control" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <br></br>
      <button onClick={signin} type="button" class="btn btn-primary"> Signin </button>
    </div>
  );
}
export default Signin;
