import React from "react";
import NavbarCompo from "../NavBar/NavbarCompo";
import "./dashboard.css";
import UserList from "../UserList/UserList";
import { userData } from "./User";

const Dashboard = ({ onLogout }) => {
  const [users, setUsers] = React.useState(userData.users);
  const [search, setSearch] = React.useState("");

  const onInputChange = (e) => {
    setSearch(e.target.value);

    const filteredUsers = userData.users.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setUsers(filteredUsers);
  };

  const handleUserDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="dashboard-1">
      <NavbarCompo users={users} onLogOut={onLogout} />
      <h1 style={{ textAlign: "center" }}>User's Dashboard</h1>
      <div className="search">
        <input
          value={search}
          onChange={onInputChange}
          type="text"
          placeholder="Search User"
        />
      </div>
      <UserList users={users} setUsers={handleUserDelete} />
    </div>
  );
};

export default Dashboard;
