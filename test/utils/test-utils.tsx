import React, { type PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import {
  AppStore,
  RootState,
  setupStore,
} from "../../src/shared/store/configure-store";
import { MemoryRouter } from "react-router-dom";
import { theme } from "../../src/shared/utils/theming/defaultTheme";
/*
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
*/

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
  initialEntries?: string[],
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ScThemeProvider theme={theme}>
              <MemoryRouter initialEntries={initialEntries}>
                {children}
              </MemoryRouter>
            </ScThemeProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
