import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

axios.defaults.baseURL = `http://localhost:${process.env.REACT_APP_PORT}`;

const useAxios = (method, url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const hendleAxios = async () => {
    try {
      const res = await axios[method](url);
      setResponse(res);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    hendleAxios();
  }, [url]);

  return { response, isLoading, error };
};

useAxios.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default useAxios;
