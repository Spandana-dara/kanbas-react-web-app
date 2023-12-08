
import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    try {
      await client.updateUser(account);
    } catch(err) {
      setError(err.response.data.message)
    }
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }

  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      <br></br>
      {error && <div style={{color:"red"}}>{error}</div>}
      <br></br>
      {account && (
        <div>
          <label>Password</label>
          <input value={account.password} className="form-control"
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })} />
          <br></br>
          <label>First Name</label>
          <input value={account.firstName} className="form-control"
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <br></br>
          <label>Last Name</label>
          <input value={account.lastName} className="form-control"
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          <br></br>
          <label>DOB</label>
          <input value={account.dob} className="form-control"
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} />
          <br></br>
          <label>Email</label>
          <input value={account.email} className="form-control"
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
          <br></br>
          <select className="form-control" onChange={(e) => setAccount({
            ...account,
            role: e.target.value
          })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} type="button" class="btn btn-primary">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger">
            Signout
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>

        </div>
      )}
    </div>
  );
}
export default Account;