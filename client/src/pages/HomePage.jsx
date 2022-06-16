import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import SearchInput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import useAxios from "../hooks/useAxios";
import Button from "../components/Button/Button";

const Homepage = () => {
  const [pages, setPages] = useState(0);
  const [data, setData] = useState([]);
  const { response, isLoading, error } = useAxios("get", `/clients?page=${page}`);

  useEffect(() => {
    if (response) {
      setData(response.data.clients);
      setPages(response.data.pages);
    }
  }, [response]);

  return (
    <StyledPage>
      <Header />
      <SearchInput />
      {isLoading && <Loading />}
      {error && <Error error={error.response.status} />}
      {data && (
        <ul>
          {data.map((client, index) => {
            return (
              <li key={index}>
                <Client
                  name={client.Name}
                  id={client.ID}
                  email={client.Email}
                  phone={client.Phone}
                  ip={client.IP}
                />
              </li>
            );
          })}
        </ul>
      )}
    </StyledPage>
  );
};

export default Homepage;
