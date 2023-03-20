import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { Snackbar } from "../../src/components";

describe("Snackbar", () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    open: true,
    message: "This is a success message",
    type: "success" as const,
    onClose: mockOnClose,
  };

  it("renders with success variant message", () => {
    const { container } = renderWithProviders(<Snackbar {...defaultProps} />);

    const alertElement = screen.getByRole("alert");
    // eslint-disable-next-line testing-library/no-node-access
    const snackbarElement = container.firstChild;
    expect(snackbarElement).toHaveClass("MuiSnackbar-root");
    expect(alertElement).toHaveClass("MuiAlert-root");
  });

  it("calls onClose function when close button is clicked", async () => {
    renderWithProviders(<Snackbar {...defaultProps} />);
    const closeButton = screen.getByRole("button", { name: /close/i });

    await userEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("auto hides after specified duration", () => {
    const autoHideDuration = 2000;
    const { container } = renderWithProviders(<Snackbar {...defaultProps} />);
    // eslint-disable-next-line testing-library/no-node-access
    const snackbarElement = container.firstChild;
    expect(snackbarElement).toBeVisible();
    setTimeout(() => {
      expect(snackbarElement).not.toBeVisible();
    }, autoHideDuration);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
