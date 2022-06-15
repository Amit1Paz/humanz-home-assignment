import styled from "styled-components";
import colors from "../../theme/colors";

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  width: 20rem;
  border: 1px solid ${colors.darkGrayishBlue};
  border-radius: 100rem;

  input {
      width: 90%;
  }
  input:focus {
      outline: none;
  }
`;
