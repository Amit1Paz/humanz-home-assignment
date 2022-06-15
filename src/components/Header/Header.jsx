import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Humanz" />
      <StyledButton>Add a user</StyledButton>
    </StyledHeader>
  );
};

export default Header;
