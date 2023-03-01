import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../utils/typescript/types";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../graphql/queries";

export interface CarStore {
  cars: Car[];
  isLoading: boolean;
  hasError: [boolean, string];
}

const initialState: CarStore = {
  cars: [],
  isLoading: false,
  hasError: [false, ""],
};

const carSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    setCarData(state, action: PayloadAction<Car[]>) {
      state.cars = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setHasError(state, action: PayloadAction<[boolean, string]>) {
      state.hasError = action.payload;
    },
  },
});

export const fetchCars = () => async (dispatch: any) => {
  dispatch(setIsLoading(true));
  try {
    const response = (await API.graphql(graphqlOperation(listCars))) as any;
    const cars = response.data.listCars.items;
    dispatch(setCarData(cars));
    dispatch(setHasError([false, "Successfully fetched cars!"]));
  } catch (error: any) {
    dispatch(setHasError([true, "Error fetching cars!"]));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default carSlice.reducer;
export const { setCarData, setIsLoading, setHasError } = carSlice.actions;
