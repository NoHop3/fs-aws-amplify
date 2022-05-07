import React, { Key, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listManufacturers, listModels, listCars } from "./graphql/queries";

import "@aws-amplify/ui-react/styles.css";
import { Manufacturer, Model, Car } from "./typescript/types";

function App() {
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);
  const [cars, setCars] = useState([]);

  const fetchManufacturers = async () => {
    try {
      const ManufacturerData = (await API.graphql(
        graphqlOperation(listManufacturers)
      )) as any;
      const Manufacturers = ManufacturerData.data.listManufacturers.items;
      console.log(Manufacturers);
      setManufacturers(Manufacturers);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchModels = async () => {
    try {
      const ModelsData = (await API.graphql(
        graphqlOperation(listModels)
      )) as any;
      const Models = ModelsData.data.listModels.items;
      console.log(Models);
      setModels(Models);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCars = async () => {
    try {
      const CarsData = (await API.graphql(graphqlOperation(listCars))) as any;
      const Cars = CarsData.data.listCars.items;
      console.log(Cars);
      setCars(Cars);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchManufacturers();
    fetchModels();
    fetchCars();
  }, []);

  return (
    <div className='App'>
      <div>
        <h1>Hello manufacturers!</h1>
        {manufacturers.map((manufacturer: Manufacturer) => (
          <div key={manufacturer.id as Key}>{manufacturer.name}</div>
        ))}
      </div>
      <div>
        <h1>Hello models!</h1>
        {models.map((model: Model) => (
          <div key={model.id as Key}>{model.name}</div>
          ))}
      </div>
      <div>
        <h1>Hello cars!</h1>
        {cars.map((car: Car) => (
          <div key={car.id as Key}>
            <>
              {car.model.name} {car.generation} {car.power}hp {car.torque}N·m {car.engine} {car.engine}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
