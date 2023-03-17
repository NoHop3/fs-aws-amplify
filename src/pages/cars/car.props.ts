import { type Car } from "../../shared/models";

export interface CarProps {
  cars: Car[];
  isLoading: boolean;
  fetchCars: () => void;
}
