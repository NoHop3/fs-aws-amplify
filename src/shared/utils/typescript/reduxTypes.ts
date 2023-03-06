import { Action } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../../store/app-state";
import { AppDispatch } from "../../store/app-thunk";

export declare type Thunk<TStore> = ThunkAction<
  void,
  TStore,
  null,
  Action<string>
>;
export declare type AsyncThunk<TStore, TReturnType = void> = ThunkAction<
  Promise<TReturnType>,
  TStore,
  null,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
