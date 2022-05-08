import React, { Key, useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listManufacturers, listModels, listCars } from "./graphql/queries";
import { createModel } from "./graphql/mutations";

import "@aws-amplify/ui-react/styles.css";
import { Manufacturer, Model, Car } from "./typescript/types";

import { v4 as uuidv4 } from "uuid";
import { modelsData } from "./models";

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

    console.log(models)

  const handleBulkClick = async (model: Partial<Model>) => {
    try {
      console.log(model);
      await API.graphql(graphqlOperation(createModel, { input: model }));
    } catch (err) {
      console.log("error creating model:", err);
    }
  };
  // const handleCreateClick = async () => {
  //   try {
  //     const model = values;
  //     console.log(model);
  //     await API.graphql(graphqlOperation(createModel, { input: values }));
  //   } catch (err) {
  //     console.log("error creating model:", err);
  //   }
  // };

  const handleBulkAdd = () => {
    modelsData.forEach((model) => {
      try {
        handleBulkClick(model);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    // fetchManufacturers();
    fetchModels();
    // fetchCars();
  }, []);

  return (
    <div className='App'>
      {/* <div>
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
        <button
          onClick={() => {
            setValues({ ...values, id: uuidv4() });
          }}>
          Generate ID
        </button>
        <div>
          <>{JSON.stringify(values)}</>
        </div>
      </div> */}
        <button onClick={handleBulkAdd}>Add models</button>

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
