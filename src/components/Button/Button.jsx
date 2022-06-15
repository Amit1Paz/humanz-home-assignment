import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ children, type = "regular" }) => {
  return <StyledButton type={type}>
    {children}
    </StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["regular", "square"]),
};
export default Button;
