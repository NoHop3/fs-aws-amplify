import { configureStore, combineReducers } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, type History } from "history";
import carReducer from "./car-store";
import notificationReducer from "./notification-store";

export const history = createBrowserHistory();

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    cars: carReducer,
    notifications: notificationReducer,
  });

export let store: ReturnType<typeof configureAppStore>;

export const configureAppStore = () => {
  const _store = configureStore({
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ serializableCheck: false }).concat(
        routerMiddleware(history),
      );
    },
  });
  store = _store;
  return _store;
};

// Setup store for testing
export const setupStore = (preloadedState?: PreloadedState<any>) => {
  return configureStore({
    reducer: combineReducers({
      router: connectRouter(history),
      cars: carReducer,
      notifications: notificationReducer,
    }),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof createRootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
