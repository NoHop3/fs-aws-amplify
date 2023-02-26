export type Manufacturer = {
  id: string;
  name: string;
  established: string;
  headquarters: string;
  founder: string;
  about: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  netWorth: string;
};

export type Model = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  manufacturer: Manufacturer;
};

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

export type NavItem = {
  name: string;
  path: string;
}