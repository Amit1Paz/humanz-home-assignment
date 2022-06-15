import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import SearchInput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import useAxios from "../hooks/useAxios";

const Homepage = () => {
  const { response, isLoading, error } = useAxios("get", "/clients");

  return (
    <StyledPage>
      <Header />
      <SearchInput />
      {isLoading && <Loading />}
      {error && <Error error={error.response.status} />}
      <ul>
        <li>
          <Client />
        </li>
      </ul>
    </StyledPage>
  );
};

export default Homepage;
