import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
function UserTable() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
            setError(null)
        } catch (err) {
            setError(err.response.data.message);
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
            setError(null)
        } catch (err) {
            setError(err.response.data.message);
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
            setError(null)
        } catch (err) {
            setError(err.response.data.message);
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
          await client.deleteUser(user);
          setUsers(users.filter((u) => u._id !== user._id));
          setError(null)
        } catch (err) {
          setError(err.response.data.message);
          console.log(err);
        }
      };
    

    return (
        <div>
            <h1>User List</h1>
            {error && <div style={{color:"red"}}>{error}</div>}
      <br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td className="text-nowrap">
                            <BsFillCheckCircleFill onClick={updateUser}
                                className="me-2 text-success fs-1 text" />
                            <BsPlusCircleFill onClick={createUser}
                                className="text-success fs-1 text" />
                        </td>

                    </tr>

                    {users.map((user) => (
                        <tr key={user._id}>
                            <Link to={`/project/account/${user._id}`}><td>{user.username}</td></Link>
                            
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td className="text-nowrap">
                                <button className="btn btn-danger me-2">
                                    <BsTrash3Fill onClick={() => deleteUser(user)} />
                                </button>
                                <button className="btn btn-warning me-2">
                                    <BsPencil onClick={() => selectUser(user)} />
                                </button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;