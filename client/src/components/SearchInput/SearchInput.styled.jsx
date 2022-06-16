import styled from "styled-components";
import colors from "../../theme/colors";

const media = {
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
  }

  input:focus {
    outline: none;
  }

  ${media[400]} {
    input {
      width: 13rem;
    }
  }
`;
