import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <StyledButton>
      ${props.children}
    </StyledButton>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Button;
