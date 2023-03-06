import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../models";

export interface CarStore {
  cars: Car[];
  isLoading: boolean;
}

const initialState: CarStore = {
  cars: [],
  isLoading: false,
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
  },
});

export default carSlice.reducer;
export const { setCarData, setIsLoading } = carSlice.actions;
