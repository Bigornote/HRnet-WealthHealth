import React from "react";
import { Link } from "react-router-dom";

/**
 * @returns Header component
 */

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link className="nav-link" to={"/"}>
            HRnet.
          </Link>
        </div>
        <div className="nav-container">
          <Link className="nav-link" to={"/create-employee"}>
            Create an Employee
          </Link>
          <Link className="nav-link" to={"/list-employee"}>
            List of Employees
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
