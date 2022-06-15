import { StyledHeader } from "./Header.styled";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return <StyledHeader>
      <img src={Logo} alt="Humanz" />
  </StyledHeader>;
};

export default Header;
