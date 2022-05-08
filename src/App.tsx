import React, { Key, useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listManufacturers, listModels, listCars } from "./graphql/queries";
import { createManufacturer, createModel } from "./graphql/mutations";

import "@aws-amplify/ui-react/styles.css";
import { Manufacturer, Model, Car } from "./typescript/types";

import { v4 as uuidv4 } from "uuid";
import { manufacturersData } from "./manufacturers";

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

  console.log(manufacturersData);

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

  const [values, setValues] = useState({
    id: "",
    name: "",
    manufacturerModelsId: "",
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

  const handleCreateClick = async () => {
    try {
      const model = values;
      console.log(model);
      await API.graphql(
        graphqlOperation(createModel, { input: values })
      );
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  // const handleBulkAdd = () => {
  //   manufacturersData.forEach((manufacturer) => {
  //     try {
  //       handleCreateClick(manufacturer);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   });
  // };

  useEffect(() => {
    // fetchManufacturers();
    fetchModels();
    // fetchCars();
  }, []);

  return (
    <div className='App'>
      {/* <button
      onClick={handleBulkAdd}
      >Add bulk manufacturers</button> */}
      <div>
        <div>
          <label htmlFor='text'>Name</label>
          <input type='text' name='name' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='manufacturerModelsId'>manufacturerModelsId</label>
          <input
            type='text'
            name='manufacturerModelsId'
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor='headquarters'>headquarters</label>
          <input type='text' name='headquarters' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='founder'>founder</label>
          <input type='text' name='founder' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='about'>about</label>
          <input type='text' name='about' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='netWorth'>net worth</label>
          <input type='text' name='netWorth' onChange={handleChange} />
        </div> */}
        <button
          onClick={() => {
            setValues({ ...values, id: uuidv4() });
          }}>
          Generate ID
        </button>
        <button onClick={handleCreateClick}>Create model</button>
        <div>
          <>{JSON.stringify(values)}</>
        </div>
      </div>
      {/* <div>
        <h1>Hello manufacturers!</h1>
        {manufacturers.map((manufacturer: Manufacturer) => (
          <div key={manufacturer.id as Key}>{manufacturer.name}</div>
        ))}
      </div> */}

      <div>
        <h1>Hello models!</h1>
        {models.map((model: Model) => (
          <div key={model.id as Key}>{model.name}</div>
        ))}
      </div>
      {/*
      <div>
        <h1>Hello cars!</h1>
        {cars.map((car: Car) => (
          <div key={car.id as Key}>
            <>
              {car.model.name} {car.generation} {car.power}hp {car.torque}N·m {car.engine} {car.engine}
            </>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
