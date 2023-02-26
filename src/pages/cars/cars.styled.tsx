import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledCarGrid = styled(Grid)`
  display grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
