import { StyledForm, StyledError } from "./Form.styled";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import axios from "axios";
import PropTypes from "prop-types";

const Form = ({ setIsFormOpen, setData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    const res = await axios.post("/clients", data);
    setData(res.data.clients);
    setIsFormOpen(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="Name">Full Name:</label>
      <input type="text" id="Name" {...register("Name", { required: true })} />
      {errors.Name && <StyledError>Name is invalid</StyledError>}

      <label htmlFor="ID">ID:</label>
      <input type="number" id="ID" {...register("ID", { required: true })} />
      {errors.ID && <StyledError>ID is invalid</StyledError>}

      <label htmlFor="Email">Email:</label>
      <input type="email" id="Email" {...register("Email", { required: true })} />
      {errors.Email && <StyledError>Email is invalid</StyledError>}

      <label htmlFor="Phone">Phone:</label>
      <input type="number" id="Phone" {...register("Phone", { required: true })} />
      {errors.Phone && <StyledError>Phone is invalid</StyledError>}

      <label htmlFor="IP">IP:</label>
      <input type="text" id="IP" {...register("IP", { required: true })} />
      {errors.IP && <StyledError>IP is invalid</StyledError>}

      <Button onClick={handleSubmit(handleFormSubmit)}>Submit</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Form;
