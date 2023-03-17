import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { _Cars } from "./cars.container";
import { services } from "../../services";
import { type ApplicationState } from "../../shared/store/app-state";
import { type AppDispatch } from "../../shared/store/app-thunk";

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.cars.isLoading,
  cars: state.cars.cars,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      fetchCars: services.fetchCars,
    },
    dispatch,
  );
};

export const Cars = connect(mapStateToProps, mapDispatchToProps)(_Cars);
