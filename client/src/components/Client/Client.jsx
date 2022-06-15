import { StyledClient, StyledSection } from "./Client.styled";
import MapIcon from "../../assets/images/map-icon.svg";
import EmailIcon from "../../assets/images/mail-icon.svg";
import PhoneIcon from "../../assets/images/phone-icon.svg";
import IpIcon from "../../assets/images/ip-icon.svg";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Client = (props) => {
  return (
    <StyledClient>
      <StyledSection>
        <h2>{props.name}</h2>
        <p>{props.id}</p>
        <div>
          <img src={MapIcon} alt="Address" />
          <p>Israel, Rishon Lezion</p>
        </div>
      </StyledSection>
      <StyledSection>
        <h4>Contact information</h4>
        <div>
          <img src={EmailIcon} alt="Email" />
          <p>{props.email}</p>
        </div>
        <div>
          <img src={PhoneIcon} alt="Phone" />
          <p>{props.phone}</p>
        </div>
      </StyledSection>
      <StyledSection>
        <div>
          <img src={IpIcon} alt="IP" />
          <p>{props.ip}</p>
        </div>
      </StyledSection>
      <StyledSection>
        <Button type="square">
          <img src={DeleteIcon} alt="delete" />
        </Button>
      </StyledSection>
    </StyledClient>
  );
};

Client.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  ip: PropTypes.string.isRequired,
};

export default Client;
