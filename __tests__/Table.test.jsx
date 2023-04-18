import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Table from "../src/components/Table";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  employee: {
    employees: [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1980-01-01",
        startDate: "2021-01-01",
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "California",
          zipCode: "12345",
        },
        department: "Sales",
      },
    ],
  },
});

describe("Table component", () => {
  test("renders the table with employee data", () => {
    render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    // Assert that the table headers are displayed
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();

    // Assert that the table displays the correct employee data
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });

  test("filters the table by employee first name", () => {
    render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    const filterInput = screen.getByPlaceholderText(
      "Search First Name or Last Name"
    );

    // Type "john" in the filter input
    fireEvent.change(filterInput, { target: { value: "john" } });

    // Wait for the filter to be applied
    waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
    });
  });
});
