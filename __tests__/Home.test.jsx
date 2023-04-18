import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/pages/Home";

describe("Home component", () => {
  test("renders a header with correct text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const header = screen.getByRole("heading", {
      name: /welcome to the wealthhealth hrnet/i,
    });
    expect(header).toBeInTheDocument();
  });

  test("renders a button with correct text and link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const createEmployeeButton = screen.getByRole("link", {
      name: /create an employee/i,
    });
    expect(createEmployeeButton).toBeInTheDocument();
    expect(createEmployeeButton).toHaveAttribute("href", "/create-employee");
  });
});
