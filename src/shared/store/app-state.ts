import { RouterState } from "connected-react-router";
import { CarStore } from "./car-store";
import { NotificationStore } from "./notification-store";

export type ApplicationState = {
  router: RouterState;
  cars: CarStore;
  notifications: NotificationStore;
};
