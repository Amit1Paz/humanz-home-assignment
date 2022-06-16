import { StyledForm } from "./Form.styled";
import Button from "../Button/Button";
import axios from "axios";
import { useRef } from "react";

const Form = () => {
  const nameRef = useRef();
  const idRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ipRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: nameRef.current,
      ID: idRef.current,
      Email: emailRef.current,
      Phone: phoneRef.current,
      IP: ipRef.current,
    };
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

export default Form;
