import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";
import { Car } from "../../utils/typescript/types";
import { CarCard } from "../../components";
import { StyledCarGrid, StyledCircularProgress } from "./cars.styled";

export const _Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCars = async () => {
    try {
      const CarsData = (await API.graphql(graphqlOperation(listCars))) as any;
      const Cars = CarsData.data.listCars.items;
      setCars(Cars);
      console.log(Cars);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCars();
    cars.length > 0 && setIsLoading(false);
  }, [cars.length]);

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
