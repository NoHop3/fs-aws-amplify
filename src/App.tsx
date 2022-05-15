import React, { Key, useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listManufacturers, listModels, listCars } from "./graphql/queries";
import { createModel, createCar } from "./graphql/mutations";

import "@aws-amplify/ui-react/styles.css";
import { Manufacturer, Model, Car } from "./typescript/types";

import { v4 as uuidv4 } from "uuid";
// import { modelsData } from "./models";
import { carsData } from "./cars";


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
      setManufacturers(Manufacturers);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(
  //   manufacturers.sort(function (a: Manufacturer, b: Manufacturer) {
  //     // Sorting alphabetically
  //     const manufacturerA = a.name.toLocaleLowerCase();
  //     const manufacturerB = b.name.toLocaleLowerCase();

  //     if (manufacturerA > manufacturerB) return 1;
  //     if (manufacturerB > manufacturerA) return -1;

  //     return 0;
  //   })
  // );

  const fetchModels = async () => {
    try {
      const ModelsData = (await API.graphql(
        graphqlOperation(listModels)
      )) as any;
      const Models = ModelsData.data.listModels.items;
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

  const [values, setValues] = useState({
    id: "",
    name: "",
    image:"",
    generation:0,
    power:0,
    torque:0,
    weight:0,
    engine:"",
    gearbox:"",
    modelCarsId: "",
  });
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    [values]
  );


  const handleBulkClick = async (car: Partial<Car>) => {
    try {
      console.log(car);
      await API.graphql(graphqlOperation(createCar, { input: car }));
    } catch (err) {
      console.log("error creating car:", err);
    }
  };
  const handleCreateClick = async (values: Partial<Car>) => {
    try {
      const Car = values;
      console.log(Car);
      await API.graphql(graphqlOperation(createCar, { input: values }));
    } catch (err) {
      console.log("error creating Car:", err);
    }
  };

  // const handleBulkAdd = () => {
  //   modelsData.forEach((model) => {
  //     try {
  //       handleBulkClick(model);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   });
  // };
  const handleBulkAdd = () => {
    carsData.forEach((car) => {
      try {
        handleBulkClick(car);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    // fetchManufacturers();
    // fetchModels();
    fetchCars();
  }, []);

  return (
    <div className='App'>
      {/*<div>
         <div>
          <label htmlFor='text'>Name</label>
          <input type='text' name='name' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>image</label>
          <input type='text' name='image' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>generation</label>
          <input type='number' name='generation' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>power</label>
          <input type='number' name='power' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>torque</label>
          <input type='number' name='torque' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>weight</label>
          <input type='number' name='weight' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>engine</label>
          <input type='text' name='engine' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='text'>gearbox</label>
          <input type='text' name='gearbox' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='modelCarsId'>modelCarsId</label>
          <input type='text' name='modelCarsId' onChange={handleChange} />
        </div> */}
      {/* <button
          onClick={() => {
            setValues({ ...values, id: uuidv4() });
          }}>
          Generate ID
        </button>
        <button onClick={()=>{handleCreateClick(values)}}>Add a car</button>
        <div>
          <>{JSON.stringify(values)}</>
        </div>
      </div> */}
      <button onClick={handleBulkAdd} disabled>
        Add bulk
      </button>

      <div>
        <h1>Hello cars!</h1>
        {cars.map((car: Car) => (
          <div key={car.id as Key}>
            <>
              {car.model.name} {car.name} {car.generation} {car.power}hp {car.torque}N·m{" "}
              {car.engine} {car.engine}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
