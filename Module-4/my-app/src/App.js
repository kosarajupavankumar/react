import DashBoard from "./Components/Dashboard/Dashboard";
import React from "react";
import Login from "./Components/Login/Login";
import DocumentCounter from "./Components/DocumentCounter/DocumentCounter";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  // return <DocumentCounter />;

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
