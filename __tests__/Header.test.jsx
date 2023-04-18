import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../src/components/Header";

describe("Header", () => {
  test("renders logo with correct text", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logoText = screen.getByText(/HRnet\./i);
    expect(logoText).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const createEmployeeLink = screen.getByRole("link", {
      name: /create an employee/i,
    });
    expect(createEmployeeLink).toBeInTheDocument();

    const listEmployeeLink = screen.getByRole("link", {
      name: /list of employees/i,
    });
    expect(listEmployeeLink).toBeInTheDocument();
  });
});
