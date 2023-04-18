import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Form from "../src/components/Form";

const mockStore = configureStore([]);

describe("Form component", () => {
  test("submitting the form with valid data", async () => {
    // Render the form component
    const store = mockStore({
      employee: {
        employees: [],
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </Provider>
    );

    // Fill the form with valid data
    fireEvent.input(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.input(screen.getByLabelText(/Date of Birth/i), {
      target: { value: "1980-01-01" },
    });
    fireEvent.input(screen.getByLabelText(/Start Date/i), {
      target: { value: "2021-01-01" },
    });
    fireEvent.input(screen.getByLabelText(/Street/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.input(screen.getByLabelText(/City/i), {
      target: { value: "Anytown" },
    });
    fireEvent.input(screen.getByLabelText(/Zip Code/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: "California" },
    });
    fireEvent.change(screen.getByLabelText(/Departments/i), {
      target: { value: "Sales" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Modal
    const modal = await waitFor(() =>
      screen.getByText(/A new employee has been created to the list./i)
    );

    // Expect the modal to be displayed
    expect(modal).toBeInTheDocument();
  });
});
