import styled from "styled-components";
import colors from "../../theme/colors";

const media = {
  550: "@media (max-width: 550px)",
  400: "@media (max-width: 400px)",
};

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.darkGrayishBlue};
  border-radius: 100rem;

  input {
    width: 18rem;
    font-size: 1.2rem;
    color: ${colors.darkGrayishBlue};
  }

  input:focus {
    outline: none;
  }

  ${media[550]} {
    button {
      min-width: 0;
    }
    input {
      width: 11rem;
    }
  }

  ${media[400]} {
    gap: 0.5rem;
    padding: 0.5rem;
    button {
      padding: 0.5rem 1rem;
    }
    input {
      font-size: 1rem;
      width: 10rem;
    }
  }
`;
