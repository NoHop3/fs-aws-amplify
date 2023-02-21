import React from "react";
import { Car } from "../../typescript/types";
import {
  CarImage,
  CarInfo,
  CarInfoWrapper,
  CarLogo,
  CarModel,
  CarModelWrapper,
  CarName,
  CarWrapper,
} from "./CarCard.styled";

export default function CarCard({ ...props }: Car) {
  return (
    <CarWrapper>
      {props.image && <CarImage src={props.image} alt={props.name} />}
      {props.name && <CarName>{props.name}</CarName>}
      {props.model && (
        <CarModelWrapper>
          <CarModel>{props.model.name}</CarModel>
          <CarLogo>{props.model.manufacturer.logo}</CarLogo>
        </CarModelWrapper>
      )}
      <CarInfoWrapper>
        {props.power && <CarInfo>{props.power}</CarInfo>}
        {props.torque && <CarInfo>{props.torque}</CarInfo>}
        {props.engine && <CarInfo>{props.engine}</CarInfo>}
        {props.weight && <CarInfo>{props.weight}</CarInfo>}
        {props.generation && <CarInfo>{props.generation}</CarInfo>}
        {props.gearbox && <CarInfo>{props.gearbox}</CarInfo>}
      </CarInfoWrapper>
    </CarWrapper>
  );
}
