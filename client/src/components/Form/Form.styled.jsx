import styled from "styled-components";
import colors from "../../theme/colors";

const media = {
  425: "@media (max-width: 425px)",
};

export const StyledForm = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  color: ${colors.white};
  background-color: ${colors.darkGrayishBlue};
  border-radius: 0.5rem;

  input {
    background-color: ${colors.gray};
    color: ${colors.white};
    padding: 0.5rem 1rem;
    margin: 0.3rem 0;
    border-radius: 100rem;
  }

  input:last-of-type {
    margin-bottom: 2rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  button:hover {
    background-color: ${colors.blue};
  }

  ${media[425]} {
    button {
      padding: 1rem 1.5rem;
    }
  }
`;
