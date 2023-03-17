import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BottomNavigation } from "../../src/components";

describe("BottomNavigation Component", () => {
  it("should render without crashing", () => {
    render(<BottomNavigation />);
  });

  it("should have correct initial state", () => {
    render(<BottomNavigation />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("navigation").getAttribute("value")).toBe("home");
  });

  it("updates state on navigation change", () => {
    render(<BottomNavigation />);
    fireEvent.click(screen.getByLabelText("Favorites"));
    expect(screen.getByRole("navigation").getAttribute("value")).toBe(
      "favorites",
    );

    fireEvent.click(screen.getByLabelText("Theme"));
    expect(screen.getByRole("navigation").getAttribute("value")).toBe("theme");

    fireEvent.click(screen.getByLabelText("Home"));
    expect(screen.getByRole("navigation").getAttribute("value")).toBe("home");
  });
});
