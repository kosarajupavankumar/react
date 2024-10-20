import React from "react";
import "./user.css";

const User = (props) => {
  const userData = props.data;
  return (
    <div className="user">
      <img className="image_avatar" src={userData.image} alt="Avatar" />
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p> {userData.email}</p>
      <p>{userData.phone}</p>
      <h2>{userData.age}</h2>
    </div>
  );
};

export default User;
