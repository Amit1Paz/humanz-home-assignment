import { useEffect, useState } from "react";
import { StyledClient, StyledSection } from "./Client.styled";
import MapIcon from "../../assets/images/map-icon.svg";
import EmailIcon from "../../assets/images/mail-icon.svg";
import PhoneIcon from "../../assets/images/phone-icon.svg";
import IpIcon from "../../assets/images/ip-icon.svg";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import useAxios from "../../hooks/useAxios";
import useWindowSize from "../../hooks/useWindowSize";
import axios from "axios";

const Client = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [buttonType, setButtonType] = useState("square");

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 850) {
      setButtonType("regular");
    } else {
      setButtonType("square");
    }
  }, [windowSize]);

  const { response, isLoading, error } = useAxios(
    "get",
    `http://ip-api.com/json/${props.ip}`
  );

  const handleDeleteClient = async () => {
    const res = await axios.delete(`/clients/${props.id}?searchName=${props.searchValue}`);
    props.setData(res.data.clients);
  };

  useEffect(() => {
    if (response) {
      if (response.data.status === "fail") {
        return setCountry(response.data.status);
      } else {
        setCity(response.data.city);
        setCountry(response.data.country);
      }
    }
  }, [response]);

  return (
    <StyledClient>
      <StyledSection>
        <h2>{props.name}</h2>
        <p>{props.id}</p>
        <div>
          <img src={MapIcon} alt="Address" />
          {isLoading && <p>Loading...</p>}
          {error || !country || (!city && <p>There is no known location</p>)}
          {country && city && (
            <p>
              {country}, {city}
            </p>
          )}
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
        <Button type={buttonType} onClick={handleDeleteClient}>
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
  setData: PropTypes.func.isRequired,
  searchValue: PropTypes.string
};

export default Client;
