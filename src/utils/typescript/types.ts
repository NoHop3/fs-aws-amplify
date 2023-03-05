export type NavItem = {
  name: string;
  path: string;
}

export type Notification = {
  open: boolean;
  type: "success" | "error";
  message: string;
}