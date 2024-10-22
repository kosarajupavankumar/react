import React from "react";
import User from "../User/user";

const UserList = (props) => {
  const { users, setUsers } = props;

  return (
    <div className="dashboard">
      {users.map((user, index) => (
        <User key={index} data={user} onDelete={() => setUsers(user.id)} />
      ))}
    </div>
  );
};

export default UserList;
