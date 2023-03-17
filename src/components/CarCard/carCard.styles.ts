import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const CarCardWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const CarName = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;

export const CarModelWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarModel = styled(Typography)`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  white-space: pre;
`;

export const CarLogo = styled.img`
  margin: 0 0.5rem;
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const CarInfoWrapper = styled(Box)`
  width: calc(100% - 2rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CarInfo = styled(Typography)`
  margin: 0 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
