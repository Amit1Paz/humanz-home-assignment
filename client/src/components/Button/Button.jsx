import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ children, onClick, type = "regular" }) => {
  return <StyledButton onClick={onClick} type={type}>
    {children}
    </StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["regular", "square"]),
};
export default Button;
