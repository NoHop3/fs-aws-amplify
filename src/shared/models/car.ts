import { type Model } from "./model";

export interface Car {
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
}
