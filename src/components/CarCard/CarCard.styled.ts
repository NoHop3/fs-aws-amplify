import { Box } from "@mui/system";
import styled from "styled-components";

export const CarWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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

export const CarName = styled.h3`
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;

export const CarModelWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CarModel = styled.h4`
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
`;

export const CarLogo = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
`;

export const CarInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`;

export const CarInfo = styled.p`
    margin: 0 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
`;