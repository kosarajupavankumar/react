import User from "../User/user";
import "./dashboard.css";
import { userData } from "./User";

function renderuser() {
  return (
    <div className="dashboard">
      {userData.users.map((user, index) => (
        <User key={index} data={user} />
      ))}
    </div>
  );
}

function DashBoard() {
  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100%" }}>
      <h1>Dashboard</h1>
      {renderuser()}
    </div>
  );
}

export default DashBoard;
