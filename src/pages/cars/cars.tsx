import { useEffect } from "react";
import { Car } from "../../utils/typescript/types";
import { CarCard } from "../../components";
import { StyledCarGrid, StyledCircularProgress } from "./cars.styled";
import {
  useAppDispatch,
  useAppSelector,
} from "../../utils/typescript/reduxTypes";
import { fetchCars } from "../../services/car-service";

export const _Cars = () => {
  const dispatch = useAppDispatch();
  const { isLoading, cars } = useAppSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <StyledCarGrid>
      {!isLoading ? (
        cars.map((car: Car) => <CarCard key={car.id} {...car} />)
      ) : (
        <StyledCircularProgress disableShrink size={"6rem"} />
      )}
    </StyledCarGrid>
  );
};
