import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "../src/pages/Error";

describe("Error component", () => {
  test("renders 404 error message and link to home page", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    // Vérifier que le message d'erreur est affiché
    const errorMessage = screen.getByText(
      /la page que vous demandez n'existe pas/i
    );
    expect(errorMessage).toBeInTheDocument();

    // Vérifier que le lien retourne à la page d'accueil
    const linkToHome = screen.getByRole("link", {
      name: /retournez à la page d'accueil/i,
    });
    expect(linkToHome).toHaveAttribute("href", "/");
  });
});
