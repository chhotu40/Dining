import React from "react";
import { Link } from "react-router-dom";

export default function MainPage({ user, onLogout }) {
  return (
    <header className="bg-warning-subtle text-black py-2 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="fw-bold fs-4">🍽️ Resto-Dine</div>

        {/* Search bar */}
        <form className="d-flex fs-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            style={{ borderRadius: "0px" }}
          />
          <button
            className="btn btn-light text-primary bi bi-search"
            type="submit"
            style={{ borderRadius: "0px" }}
          ></button>
        </form>

        {/* Navigation */}
        <nav className="d-flex align-items-center">
          <Link to="/" className="text-black text-decoration-none mx-3">
            Home
          </Link>
          <Link to="/status" className="text-black text-decoration-none mx-3">
            F-Status
          </Link>
          <Link to="/cart" className="text-black text-decoration-none mx-3">
            Cart
          </Link>
          <span className="mx-3 fw-semibold">
            👋 {user?.Name || "User"}
          </span>
          <button onClick={onLogout} className="btn btn-outline-danger btn-sm">
            Log Out
          </button>
        </nav>
      </div>
    </header>
  );
}
