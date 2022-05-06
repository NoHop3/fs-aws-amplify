import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listManufacturers } from "./graphql/queries";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [manufacturers, setManufacturers] = useState([]);

  const fetchManufacturers = async () => {
    try {
      const ManufacturerData = (await API.graphql(
        graphqlOperation(listManufacturers)
      )) as any;
      const Manufacturers = ManufacturerData.data.listManufacturers.items;
      console.log(Manufacturers)
      setManufacturers(Manufacturers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchManufacturers();
  }, []);

  return (
    <div className='App'>
      {/* <Authenticator> */}
        <h1>Hello world!</h1>
        {manufacturers.map((manufacturer:any)=>(
          <div key={manufacturer.id}>{manufacturer.name}</div> 
        ))}
      {/* </Authenticator> */}
    </div>
  );
}

export default App;
