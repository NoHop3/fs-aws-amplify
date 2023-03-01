import { AlertColor } from "@mui/material";

export interface SnackBarModel {
  open: boolean;
  type: AlertColor;
  message: string;
}
