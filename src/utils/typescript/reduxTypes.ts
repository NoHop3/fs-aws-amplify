import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
export declare type Thunk<TStore> = ThunkAction<void,TStore,null,Action<string>>;
export declare type AsyncThunk<TStore, TReturnType = void> = ThunkAction<Promise<TReturnType>,TStore,null,Action<string>>;
