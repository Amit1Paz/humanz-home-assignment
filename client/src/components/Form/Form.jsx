import { useRef } from "react";
import { StyledForm } from "./Form.styled";
import Button from "../Button/Button";
import axios from "axios";
import PropTypes from "prop-types";

const Form = ({ setIsFormOpen, setData }) => {
  const nameRef = useRef();
  const idRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ipRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: nameRef.current.value,
      ID: idRef.current.value,
      Email: emailRef.current.value,
      Phone: phoneRef.current.value,
      IP: ipRef.current.value,
    };
    const res = await axios.post("/clients", data);
    setData(res.data.clients);
    setIsFormOpen(false);
  };

  return (
    <StyledForm>
      <label htmlFor="Name">Full Name:</label>
      <input type="text" id="Name" name="Name" ref={nameRef} required />
      <label htmlFor="ID">ID:</label>
      <input type="number" id="ID" name="ID" ref={idRef} required />
      <label htmlFor="Email">Email:</label>
      <input type="email" id="Email" name="Email" ref={emailRef} required />
      <label htmlFor="Phone">Phone:</label>
      <input type="number" id="Phone" name="Phone" ref={phoneRef} required />
      <label htmlFor="IP">IP:</label>
      <input type="text" id="IP" name="IP" ref={ipRef} required />
      <Button onClick={handleFormSubmit}>Submit</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Form;
