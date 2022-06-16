import styled from "styled-components";
import colors from "../../theme/colors";

const media = {
  930: "@media (max-width: 930px)",
  850: "@media (max-width: 850px)",
};

export const StyledClient = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55rem;
  height: 6rem;
  padding: 0.2rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 10%);
  border-radius: 0.5rem;

  ${media[930]} {
    width: 50rem;
  }
  ${media[850]} {
    width: 17.5rem;
    flex-direction: column;
    height: 19.5rem;
    padding: 1rem 0.5rem;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;

  &:nth-of-type(1) {
    flex-basis: 35%;
  }

  &:nth-of-type(2) {
    flex-basis: 35%;
  }

  &:nth-of-type(3) {
    flex-basis: 20%;
  }

  &:nth-of-type(4) {
    flex-basis: 0%;
  }

  h2 {
    color: ${colors.blue};
  }

  h4 {
    color: ${colors.gray};
  }

  p {
    font-weight: 500;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  ${media[850]} {
    width: 100%;
    align-items: center;
    &:nth-of-type(1) {
      margin-bottom: 1rem;
    }
  }
`;
