import { listCars } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { Car } from "../utils/typescript/types";
import { setIsLoading, setCarData } from "../store/car-store";
import { setNotification } from "../store/notification-store";

export const fetchCars = () => async (dispatch: any) => {
  dispatch(setIsLoading(true));
  try {
    const response = (await API.graphql(graphqlOperation(listCars))) as any;
    const cars: Car[] = response.data.listCars.items;
    dispatch(setCarData(cars));
    dispatch(setNotification({ open: true, type: "success", message: "Cars fetched successfully!" }));
  } catch (error: any) {
    dispatch(setNotification({ open: true, type: "error", message: "Failed to fetch cars!" }));
  } finally {
    dispatch(setIsLoading(false));
  }
};