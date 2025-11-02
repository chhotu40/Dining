import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../src/assets/Comonent/Login";
import MainPage from "./assets/Comonent/MainPage";
import Home from "./assets/Comonent/Home";
import HomeClickiteam from "./assets/Comonent/HomeClickIteam";
import ImageCarousel from "./assets/Comonent/homePageComponent/carousel";
import ProductList from "./assets/Comonent/LastPage";
import ProductCart from "./assets/Comonent/ProductCart";
import RestaurantOrderStatus from "./assets/Comonent/FoodStatus";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // ✅ Check localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  console.log("user", user);

  // ✅ Handle login
  const handleLogin = (loggedUser) => {
    localStorage.setItem("currentUser", JSON.stringify(loggedUser));
    setUser(loggedUser);
  };

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  // ✅ Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      {user && <MainPage user={user} onLogout={handleLogout} />}

      <Routes>
        {/* Public login route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* ✅ Default main dashboard after login */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <ImageCarousel />
                <Home />
                <HomeClickiteam />
                <ProductList />
              </>
            </ProtectedRoute>
          }
        />

        {/* 🛒 Cart Page */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <ProductCart />
            </ProtectedRoute>
          }
        />

        {/* 🍽️ Food Order Status Page */}
        <Route
          path="/status"
          element={
            <ProtectedRoute>
              <RestaurantOrderStatus />
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
