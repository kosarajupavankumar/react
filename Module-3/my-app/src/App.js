import DashBoard from "./Components/Dashboard/Dashboard";
import React from "react";
import Login from "./Components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        <DashBoard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
