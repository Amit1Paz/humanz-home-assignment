import { StyledError } from "./Error.styld";
import PropTypes from "prop-types";

const Error = ({ error }) => {
  return (
    <StyledError>
      <h2>Whoops...</h2>
      <p>Error number: {error}</p>
    </StyledError>
  );
};

Error.propTypes = {
  error: PropTypes.number.isRequired
};

export default Error;
