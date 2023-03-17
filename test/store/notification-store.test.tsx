import reducer, { NotificationStore, setNotification, setNotificationMessage, setNotificationType, setNotificationVisibility } from "../../src/shared/store/notification-store";

describe("notification slice", () => {
  const initialState: NotificationStore = {
    notification: {
      open: false,
      type: "success" as const,
      message: "",
    },
  };

  it("should handle setNotification", () => {
    const notification = {
      open: true,
      type: "error" as const,
      message: "Some Error Occurred",
    };
    const newState = { notification };
    expect(reducer(initialState, setNotification(notification))).toEqual(
      newState
    );
  });

  it("should handle setNotificationMessage", () => {
    const message = "Some Message";
    const newState = {
      notification: { ...initialState.notification, message },
    };
    expect(reducer(initialState, setNotificationMessage(message))).toEqual(
      newState
    );
  });

  it("should handle setNotificationType", () => {
    const type = "error";
    const newState = { notification: { ...initialState.notification, type } };
    expect(reducer(initialState, setNotificationType(type))).toEqual(newState);
  });

  it("should handle setNotificationVisibility", () => {
    const open = true;
    const newState = { notification: { ...initialState.notification, open } };
    expect(reducer(initialState, setNotificationVisibility(open))).toEqual(
      newState
    );
  });
});
