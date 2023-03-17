import { type RouterState } from "connected-react-router";
import { type CarStore } from "./car-store";
import { type NotificationStore } from "./notification-store";

export interface ApplicationState {
  router: RouterState;
  cars: CarStore;
  notifications: NotificationStore;
}
