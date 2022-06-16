import styled from "styled-components";

const media = {
  425: "@media (max-width: 425px)"
}

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 10%);
  width: 100%;
  padding: 2rem;
  background-color: white;
  
  ${media[425]} {
    img {
      padding-bottom: 0.5rem;
    }
    button {
      padding: 0;
    }
  }
`;
