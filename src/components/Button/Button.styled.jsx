import styled, { css } from "styled-components";
import colors from "../../theme/colors";

export const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  transition: 0.2s;
  border-radius: 100rem;
  ${({ type }) => {
    if (type === "square") {
      return css`
        padding: 0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
      `;
    }
  }}

  &:hover {
    background-color: ${colors.darkGrayishBlue};
    transition: 0.2s;
  }
`;
