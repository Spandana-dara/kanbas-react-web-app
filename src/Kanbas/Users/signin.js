import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/kanbas/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <div> Username :
      <input className="accountForm" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      </div>
      <div> Password :
      <input className="accountForm" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>
      <button className="btn btn-success col-1" onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;