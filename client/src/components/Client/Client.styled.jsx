import styled from "styled-components";
import colors from "../../theme/colors";

export const StyledClient = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55rem;
  height: 6rem;
  padding: 0 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 10%);
  border-radius: 0.5rem;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
  

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
`;
