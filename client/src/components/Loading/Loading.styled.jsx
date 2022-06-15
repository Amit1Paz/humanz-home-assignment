import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled.img`
  margin: 5rem;
  width: 5rem;
  animation-name: ${rotationAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
