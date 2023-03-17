import { useEffect } from "react";

import { type CarProps } from "./car.props";
import { type Car } from "../../shared/models";
import { CarCard } from "../../components";
import { StyledCarGrid, StyledCircularProgress } from "./cars.styles";

export const _Cars = (props: CarProps) => {
  useEffect(() => {
    props.cars && props.cars.length === 0 && props.fetchCars();
  }, [props]);

  return (
    <StyledCarGrid>
      {!props.isLoading ? (
        // eslint-disable-next-line
        props.cars.map((car: Car) => <CarCard key={car.id} {...car} />)
      ) : (
        <StyledCircularProgress disableShrink size={"6rem"} />
      )}
    </StyledCarGrid>
  );
};
