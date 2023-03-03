import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import { theme } from "./utils/theming/defaultTheme";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Provider } from "react-redux";
import { configureAppStore } from "./store/configure-store";
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureAppStore()}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ScThemeProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ScThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
