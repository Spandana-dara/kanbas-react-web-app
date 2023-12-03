import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName:"",
    lastName:"",
    dob:"",
    email:""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div>
        Username :
        <input
          className="accountForm"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
      </div>
      <div>
        Password :
        <input
          className="accountForm"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
      </div>
      <div>
        FirstName :
        <input
          className="accountForm"
          value={credentials.firstName}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              firstName: e.target.value,
            })
          }
        />
      </div>
      <div>
        LastName :
        <input
          className="accountForm"
          value={credentials.lastName}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              lastName: e.target.value,
            })
          }
        />
      </div>
      <div>
        Dob :
        <input
          className="accountForm"
          value={credentials.dob}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              dob: e.target.value,
            })
          }
        />
      </div>
      <div>
        Email :
        <input
          className="accountForm"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              email: e.target.value,
            })
          }
        />
      </div>
      <div>
        Role :
        <select
          className="accountForm"
          onChange={(e) =>
            setCredentials({
              ...credentials,
              role: e.target.value,
            })
          }
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <button className="btn btn-success" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;
