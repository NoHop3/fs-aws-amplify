import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { ApplicationState } from "./app-state";

import { Thunk, AsyncThunk } from "../../utils/typescript/reduxTypes";

export type AppThunk = Thunk<ApplicationState>;
export type AsyncAppThunk<T = void> = AsyncThunk<ApplicationState, T>;
export type AppDispatch = ThunkDispatch<ApplicationState, null, Action<string>>;
