import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import SignupForm from "./SignupForm";
import jwtDecode from "jwt-decode";

import Profile from "./Profile";

import { AuthProvider } from "./AuthContext";

function App() {
  const [page, setPage] = useState("login");

  // state re renders the page when it changes
  function currentPage() {
    switch (page) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "profile":
        return <Profile />;
      default:
        return <p>Page Doesn't exist yet</p>;
    }
  }

  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <AuthProvider>
      <div className="App">
        <NavBar onPageChange={handlePageChange} />
        {currentPage()}
      </div>
    </AuthProvider>
  );
}

export default App;
