import { Manufacturer } from "./manufacturer";

export type Model = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  manufacturer: Manufacturer;
};
