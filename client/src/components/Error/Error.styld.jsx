import styled from "styled-components";
import colors from "../../theme/colors";

export const StyledError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 5rem;
    margin-top: 3rem;

    h2 {
        color: ${colors.blue};
    }
`