import User from "../User/user";
import "./dashboard.css";
import { userData } from "./User";
import NavbarCompo from "../NavBar/NavbarCompo";

function renderuser() {
  return (
    <div className="dashboard">
      {userData.users.map((user, index) => (
        <User key={index} data={user} />
      ))}
    </div>
  );
}

function DashBoard(props) {
  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100%" }}>
      <NavbarCompo onLogOut={props.onLogout} />
      <h1>Dashboard</h1>
      {renderuser()}
    </div>
  );
}

export default DashBoard;
