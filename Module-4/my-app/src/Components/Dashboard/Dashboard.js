import React from "react";
import NavbarCompo from "../NavBar/NavbarCompo";
import "./dashboard.css";
import UserList from "../UserList/UserList";
import Loader from "../common/Spinner/Spinner";

var usersData = null;

const Dashboard = ({ onLogout }) => {
  const [users, setUsers] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isloading, setIsLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);
  React.useEffect(() => {
    console.log(`making an api call to fetch users`);
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        usersData = data.users;
        setUsers(data.users);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);

  console.log(users);

  const onInputChange = (e) => {
    setSearch(e.target.value);

    const filteredUsers = usersData.filter((user) => {
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
    <div className="dashboard-1" style={{ width: "100%" }}>
      <NavbarCompo users={users} onLogOut={onLogout} className="navbar" />
      <h1 style={{ textAlign: "center" }}>User's Dashboard</h1>

      <div className="search">
        <input
          value={search}
          onChange={onInputChange}
          type="text"
          placeholder="Search User"
        />
      </div>
      {/* Conditional rendering based on loading status */}
      <div>
        {isloading ? (
          <Loader />
        ) : (
          <UserList users={users} setUsers={handleUserDelete} />
        )}
        {isError && <h4 className="errorMessage"> Unable to fetch data</h4>}
      </div>
    </div>
  );
};

export default Dashboard;
