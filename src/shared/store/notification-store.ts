import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../utils/typescript/types";

export interface NotificationStore {
  notification: Notification;
}

const initialState: NotificationStore = {
  notification: {
    open: false,
    type: "success",
    message: "",
  },
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    setNotification(state, action: PayloadAction<Notification>) {
      state.notification = action.payload;
    },
    setNotificationType(state, action: PayloadAction<"success" | "error">) {
      state.notification.type = action.payload;
    },
    setNotificationMessage(state, action: PayloadAction<string>) {
      state.notification.message = action.payload;
    },
    setNotificationVisibility(state, action: PayloadAction<boolean>) {
      state.notification.open = action.payload;
    },
  },
});

export default notificationSlice.reducer;
export const {
  setNotification,
  setNotificationVisibility,
  setNotificationMessage,
  setNotificationType,
} = notificationSlice.actions;
