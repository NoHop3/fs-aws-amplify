// import { Amplify } from "aws-amplify";
// jest.mock("aws-amplify");
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils/test-utils";

import App from "../../src/App";

describe("Testing App.tsx", () => {
  it("should render without crashing", () => {
    renderWithProviders(<App />);
  });

  it("should navigate to Error page", () => {
    const badRoute = window.location.href + "bad-route/";
    renderWithProviders(<App />, undefined, [badRoute]);
  });

  it("should navigate to Home page", async () => {
    const badRoute = window.location.href + "bad-route/";
    renderWithProviders(<App />, undefined, [badRoute]);
    const user = userEvent.setup();

    await user.click(screen.getByRole("link", { name: "Home" }));
  });

  // it("should render app & navigate to Manufacturers", async () => {
  //   renderWithProviders(<App />);
  //   const user = userEvent.setup();

  //   expect(screen.getByText("Home page")).toBeInTheDocument();
  //   await user.click(screen.getByRole("link", { name: "Manufacturers" }));
  //   expect(screen.getByText("Manufacturers page")).toBeInTheDocument();
  // });

  // it("should render app & navigate to Models", async () => {
  //   renderWithProviders(<App />, undefined, ["/"]);
  //   const user = userEvent.setup();

  //   expect(screen.getByText("Home page")).toBeInTheDocument();
  //   await user.click(screen.getByRole("link", { name: "Models" }));
  //   expect(screen.getByText("Models page")).toBeInTheDocument();
  // });
});
