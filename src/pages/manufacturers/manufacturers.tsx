// import React, { useEffect, useState } from "react";

// import { API, graphqlOperation } from "aws-amplify";
// import { listManufacturers } from "../../graphql/queries";
// import { Manufacturer } from "../../utils/typescript/types";

export const _Manufacturers = () => {
  // const [manufacturers, setManufacturers] = useState([]);

  // const fetchManufacturers = async () => {
  //   try {
  //     const ManufacturerData = (await API.graphql(
  //       graphqlOperation(listManufacturers)
  //     )) as any;
  //     const Manufacturers = ManufacturerData.data.listManufacturers.items.sort(
  //       function (a: Manufacturer, b: Manufacturer) {
  //         // Sorting alphabetically
  //         const manufacturerA = a.name.toLocaleLowerCase();
  //         const manufacturerB = b.name.toLocaleLowerCase();

  //         if (manufacturerA > manufacturerB) return 1;
  //         if (manufacturerB > manufacturerA) return -1;

  //         return 0;
  //       }
  //     );
  //     setManufacturers(Manufacturers);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchManufacturers();
  // }, [manufacturers]);
  return <div>Manufacturers page</div>;
};
