import { SnackbarProps, AlertProps } from "@mui/material";

interface SnackbarPayload {
  message: string;

  type?: AlertProps["severity"];

  autoHideDuration?: SnackbarProps["autoHideDuration"];

  anchorOrigin?: SnackbarProps["anchorOrigin"];
}

interface ISnackbar extends SnackbarPayload {
  open: boolean;

  onClose: () => void;
}

export { SnackbarPayload, ISnackbar };
