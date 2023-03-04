import { Car } from "../../utils/typescript/types";

export type CarProps = {
  cars: Car[];
  isLoading: boolean;
  fetchCars: () => void;
};
