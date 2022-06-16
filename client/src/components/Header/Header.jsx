import { useState } from "react";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";
import Logo from "../../assets/images/logo.svg";
import Form from "../Form/Form";
import PropTypes from "prop-types";

const Header = ({ setData }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddClientClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <StyledHeader>
      <img src={Logo} alt="Humanz" />
      {isFormOpen && <Form setIsFormOpen={setIsFormOpen} setData={setData} />}
      <StyledButton onClick={handleAddClientClick}>Add a client</StyledButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default Header;
