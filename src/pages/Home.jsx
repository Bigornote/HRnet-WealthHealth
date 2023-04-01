import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

const Home = () => {
  return (
    <main className="hero">
      <div className="container left">
        <h1 className="h1">Welcome to the WealthHealth HRnet.</h1>
        <p className="content">
          Our internal web application manages the files of our employees. Here
          you can add a new employee. As well as looking at the list of
          employees.
        </p>
        <button className="btn-primary">
          <Link to={"/create-employee"}>Create an employee</Link>
        </button>
      </div>
      <div className="container right">
        <img
          className="img"
          src={home}
          alt="Illustration of a Woman Sorting Files"
        />
      </div>
    </main>
  );
};

export default Home;
