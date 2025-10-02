import React from "react";
import "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>dhLunch</h1>
      <div>
        <a href="/">Home</a>
        <a href="/dashboard">My Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;
