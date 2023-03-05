import { Model } from "./model";

export type Car = {
  id: string;
  name: string;
  model: Model;
  generation: number;
  power: number;
  torque: number;
  engine: string;
  gearbox: string;
  weight: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};
