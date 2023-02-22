import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../graphql/queries";
import { Car } from "../typescript/types";
import CarCard from "../components/CarCard/CarCard";

export default function Cars() {
  const [cars, setCars] = useState<Car[]>([]);

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
  }, []);

  return (
    <>
      {cars.map((car: Car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </>
  );
}
