import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";
import { Car } from "../../utils/typescript/types";
import { CarCard, Snackbar } from "../../components";
import { StyledCarGrid, StyledCircularProgress } from "./cars.styled";
import { AlertColor } from "@mui/material";

export const _Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [snack, setSnack] = useState<{
    open: boolean;
    type: AlertColor;
    message: string;
  }>({ open: false, type: "error", message: "" });

  const fetchCars = async () => {
    try {
      const CarsData = (await API.graphql(graphqlOperation(listCars))) as any;
      const Cars = CarsData.data.listCars.items;
      setCars(Cars);
      setSnack({
        open: true,
        type: "success",
        message: "Successfully fetched car data!",
      });
    } catch (error: any) {
      console.error(error);
      //! Globalize snacking - implement redux, notification state!
      setSnack({ open: true, type: "error", message: error.message });
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
      <Snackbar
        open={snack.open}
        message={snack.message}
        type={snack.type ?? "error"}
        onClose={() => setSnack({ open: false, type: "error", message: "" })}
        autoHideDuration={4000}
      />
    </StyledCarGrid>
  );
};
