import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
  display: block;
  width: 10rem;
  height: 3rem;
  margin-right: 1rem;
`;

export const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.light};
`;
