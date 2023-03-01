import { useEffect, useState } from "react";
import { Car } from "../../utils/typescript/types";
import { CarCard, Snackbar } from "../../components";
import { StyledCarGrid, StyledCircularProgress } from "./cars.styled";
import { SnackBarModel } from "../../shared/models";
import { fetchCars } from "../../store/car-store";
import { useDispatch } from "react-redux";

export const _Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [snack, setSnack] = useState<SnackBarModel>({
    open: false,
    type: "error",
    message: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const cars =  fetchCars();
    console.log("🚀 ~ file: Cars.tsx:21 ~ useEffect ~ cars:", cars)
    
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
