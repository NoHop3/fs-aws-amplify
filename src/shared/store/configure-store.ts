import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
