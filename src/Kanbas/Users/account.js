import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  const save = async () => {
    await client.updateUser(account);
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div>
            Username : <input className="accountForm" value={account.username} />
          </div>
          <div>
            Password : 
          <input className="accountForm"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          </div>
          <div>
            FirstName : 
          <input className="accountForm"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          </div>
          <div>
            LastName :
          <input className="accountForm"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          </div>
          <div>
            Dob :
          <input className="accountForm"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          </div>
          <div>
            Email :
          <input className="accountForm"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          </div>
          <div>
            Role :
          <select className="accountForm"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          </div>
          <div>
          <button className="btn btn-success col-2 mb-2" onClick={save}>Save</button>
          </div>
          <div>
          <button className="btn btn-primary col-2 mb-2" onClick={signout}>Signout</button>
          </div>
          <div>
          <Link to="/kanbas/table" className="btn btn-warning w-60">
            Users
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Account;
