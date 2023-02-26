import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#880000",
      dark: "#121212",
      light: "#fffefc",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    background: {
      default: "#fffefc",
    }
  },
  components: {
  },
});
