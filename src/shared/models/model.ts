import { type Manufacturer } from "./manufacturer";

export interface Model {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  manufacturer: Manufacturer;
}
