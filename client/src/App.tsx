import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Private from "./pages/Private/Private";
import Header from "./components/header/header";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";
import Footer from "./components/footer/footer";
import Profile from "./pages/Profile/Profile";
import Rank from "./pages/rank/Rank";
import Dashboard from "./pages/admin/dashboard/Dashboard";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  };

  return (
    <div className="App">
      <Header auth={auth} handleLogout={auth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/profile/:name/" element={<Profile />} />
        <Route
          path="/private"
          element={
            <RequireAuth level="admin">
              <Private />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth level="admin">
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
