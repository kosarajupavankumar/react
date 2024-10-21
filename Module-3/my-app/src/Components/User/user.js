import React from "react";
import "./user.css";

const User = (props) => {
  const { data: userData, onDelete } = props;

  const removeUser = () => {
    console.log(`remove user with id: ${userData.id}`);
    onDelete((prevUsers) =>
      prevUsers.filter((user) => user.id !== userData.id)
    );
  };

  return (
    <div className="user">
      <img className="image_avatar" src={userData.image} alt="Avatar" />
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <h2>{userData.age}</h2>
      <span className="cross" onClick={removeUser}>
        X
      </span>
    </div>
  );
};

export default User;
