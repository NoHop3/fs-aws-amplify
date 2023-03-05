import { Car } from "../../shared/models";

export type CarProps = {
  cars: Car[];
  isLoading: boolean;
  fetchCars: () => void;
};
