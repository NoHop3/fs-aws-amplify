import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listManufacturers } from "./graphql/queries";

import "@aws-amplify/ui-react/styles.css";
import { Manufacturer } from "./typescript/types";

function App() {
  const [manufacturers, setManufacturers] = useState([]);

  const fetchManufacturers = async () => {
    try {
      const ManufacturerData = (await API.graphql(
        graphqlOperation(listManufacturers)
      )) as any;
      const Manufacturers = ManufacturerData.data.listManufacturers.items.sort(
        function (a: Manufacturer, b: Manufacturer) {
          // Sorting alphabetically
          const manufacturerA = a.name.toLocaleLowerCase();
          const manufacturerB = b.name.toLocaleLowerCase();

          if (manufacturerA > manufacturerB) return 1;
          if (manufacturerB > manufacturerA) return -1;

          return 0;
        }
      );
      setManufacturers(Manufacturers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchManufacturers();
  }, [manufacturers]);

  return (
    <div className='App'>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
