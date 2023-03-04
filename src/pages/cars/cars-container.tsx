import { Car } from "../../utils/typescript/types";
import { CarCard } from "../../components";
import { CarProps } from "./car-props";
import { StyledCarGrid, StyledCircularProgress } from "./cars-styles";
import { useEffect } from "react";

export const _Cars = (props: CarProps) => {
  useEffect(() => {
    props.cars && props.cars.length === 0 && props.fetchCars();
  }, [props]);

  return (
    <StyledCarGrid>
      {!props.isLoading ? (
        props.cars.map((car: Car) => <CarCard key={car.id} {...car} />)
      ) : (
        <StyledCircularProgress disableShrink size={"6rem"} />
      )}
    </StyledCarGrid>
  );
};
