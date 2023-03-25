import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)`
  margin: 10px 0;
`;
export const OrderItemBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 8rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  button {
    font-size: 1.25rem;
    text-transform: none;
    color: black;
    padding: 0;
    min-width: 0;
    width: 48px;
  }
`;

export const StyledUniversalContainer = styled(Box)`
  padding: 0 1.5rem;
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    padding: 0 12.5%;
  }
`;
