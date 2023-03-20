/* eslint-disable testing-library/no-node-access */
import { renderWithProviders } from "../utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { BottomNavigation } from "../../src/components";

describe("BottomNavigation Component", () => {
  it("should render without crashing", () => {
    renderWithProviders(<BottomNavigation />);
  });

  it("should have correct initial state", () => {
    renderWithProviders(<BottomNavigation />);
    const bottomNavigationActions = screen.getAllByRole("button");
    expect(bottomNavigationActions).toHaveLength(3);
    expect(bottomNavigationActions.map((action) => action.textContent)).toEqual(
      ["Favorites", "Home", "Theme"],
    );
  });

  it("updates state on navigation change", () => {
    renderWithProviders(<BottomNavigation />);
    fireEvent.click(screen.getAllByRole("button")[2]);
    expect(screen.getAllByRole("button")[2]).toHaveClass("Mui-selected");
  });
});
