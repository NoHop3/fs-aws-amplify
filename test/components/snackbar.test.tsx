import { render, screen } from "@testing-library/react";
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
    render(<Snackbar {...defaultProps} />);

    const alertElement = screen.getByRole("alert");
    const snackbarElement = screen.getByRole("status");

    expect(alertElement).toHaveTextContent("This is a success message");
    expect(snackbarElement).toHaveClass("MuiSnackbar-root");
    expect(alertElement).toHaveClass("MuiAlert-filledInfo");
  });

  it("calls onClose function when close button is clicked", () => {
    const { getByRole } = render(<Snackbar {...defaultProps} />);
    const closeButton = getByRole("button", { name: /close/i });

    userEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("auto hides after specified duration", async () => {
    const autoHideDuration = 2000;
    render(<Snackbar {...defaultProps} autoHideDuration={autoHideDuration} />);

    expect(screen.getByRole("status")).toBeVisible();
    await screen.findByRole("status", {
      hidden: true,
    });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
