import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../utils/typescript/types";

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

const carSlice= createSlice({
    name: "cars",
    initialState: initialState,
    reducers: {
        // ...
    }
})

export default carSlice.reducer;
export const { /* ... */ } = carSlice.actions;