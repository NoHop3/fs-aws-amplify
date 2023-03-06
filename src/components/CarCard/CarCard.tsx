import { Car } from "../../shared/models";
import {
  CarImage,
  CarInfo,
  CarInfoWrapper,
  CarLogo,
  CarModel,
  CarModelWrapper,
  CarName,
  CarCardWrapper,
} from "./carCard.styles";

export const _CarCard = ({ ...props }: Car) => {
  return (
    <CarCardWrapper>
      {props.image && <CarImage src={props.image} alt={props.name} />}
      {props.model && (
        <CarModelWrapper>
          <CarLogo
            src={props.model.manufacturer.logo}
            alt={props.model.manufacturer.name}
          />
          <CarModel fontSize={24}>{props.model.name} </CarModel>
          {props.name && <CarName fontSize={24}>{props.name}</CarName>}
        </CarModelWrapper>
      )}
      <CarInfoWrapper>
        {props.power && <CarInfo>Power: {props.power}hp</CarInfo>}
        {props.torque && <CarInfo>Torque: {props.torque}nm</CarInfo>}
        {props.engine && <CarInfo>Engine: {props.engine}</CarInfo>}
        {props.weight && <CarInfo>Weight: {props.weight}kg</CarInfo>}
        {props.generation && <CarInfo>Generation: {props.generation}</CarInfo>}
        {props.gearbox && <CarInfo>Gearbox: {props.gearbox}</CarInfo>}
      </CarInfoWrapper>
    </CarCardWrapper>
  );
};
