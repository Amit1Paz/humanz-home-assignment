import { useState, useEffect } from "react";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";
import Logo from "../../assets/images/logo.svg";
import Form from "../Form/Form";
import PropTypes from "prop-types";
import useWindowSize from "../../hooks/useWindowSize";

const Header = ({ setData }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [buttonType, setButtonType] = useState("regular");
  const [buttonText, setButtonText] = useState("Add a client");

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 425) {
      setButtonType("square");
      setButtonText("+")
    } else {
      setButtonType("regular");
      setButtonText("Add a client")
    }
  }, [windowSize]);

  const handleAddClientClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <StyledHeader>
      <img src={Logo} alt="Humanz" />
      {isFormOpen && <Form setIsFormOpen={setIsFormOpen} setData={setData} />}
      <StyledButton onClick={handleAddClientClick} type={buttonType}>
        {buttonText}
      </StyledButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default Header;
