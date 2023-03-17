import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../src/App";

describe("Testing App.tsx", () => {
  it("Should render the Header component", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });

  it("Should render the Home page", () => {
    render(<App />);
    const homeElement = screen.getByText("Home page");
    expect(homeElement).toBeInTheDocument();
  });

  it("Should render the Cars page", () => {
    render(<App />);
    const carsElement = screen.getByText("Cars page");
    expect(carsElement).toBeInTheDocument();
  });

  it("Should render the Manufacturers page", () => {
    render(<App />);
    const manufacturersElement = screen.getByText("Manufacturers page");
    expect(manufacturersElement).toBeInTheDocument();
  });

  it("Should render the Models page", () => {
    render(<App />);
    const modelsElement = screen.getByText("Models page");
    expect(modelsElement).toBeInTheDocument();
  });

  it("Should render the Error page", () => {
    render(<App />);
    const errorElement = screen.getByText("Error page");
    expect(errorElement).toBeInTheDocument();
  });
});
