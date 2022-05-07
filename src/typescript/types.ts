export type Manufacturer = {
  id: String;
  name: String;
  established: String;
  headquarters: String;
  founder: String;
  about: String;
  logo: String;
  createdAt: String;
  updatedAt: String;
  netWorth: Number;
};

export type Model = {
  id: String;
  name: String;
  createdAt: String;
  updatedAt: String;
  manufacturer: Manufacturer;
};

export type Car = {
  id: String;
  model: Model;
  generation: Number;
  power: Number;
  torque: Number;
  engine: String;
  gearbox: String;
  weight: Number;
  image: String;
  createdAt: String;
  updatedAt: String;
};
