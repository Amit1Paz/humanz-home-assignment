import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";
import Logo from "../../assets/images/logo.svg";
import Form from "../Form/Form";
import { useEffect, useState } from "react";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddClientClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <StyledHeader>
      <img src={Logo} alt="Humanz" />
      {isFormOpen && <Form />}
      <StyledButton onClick={handleAddClientClick}>Add a client</StyledButton>
    </StyledHeader>
  );
};

export default Header;
