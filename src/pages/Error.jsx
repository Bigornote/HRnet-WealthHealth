import React from "react";
import { Link } from "react-router-dom";
import img404 from "../assets/404.png";

/**
 * @returns Error component
 */

const Error = () => {
  return (
    <main className="main">
      <div className="error">
        <div className="img-wrapper">
          <img src={img404} alt="a person parachuting" />
        </div>

        <h1 className="title-404">Error 404</h1>
        <p className="text-404">La page que vous demandez n'existe pas.</p>
        <button className="btn-primary">
          <Link to="/">Retournez à la page d'accueil</Link>
        </button>
      </div>
    </main>
  );
};

export default Error;
