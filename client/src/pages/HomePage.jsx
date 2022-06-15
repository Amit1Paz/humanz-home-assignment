import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import SearchInput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";
import useAxios from "../hooks/useAxios";

const Homepage = () => {
  return (
    <StyledPage>
      <Header />
      <SearchInput />
      <ul>
        <li>
          <Client />
        </li>
      </ul>
    </StyledPage>
  );
};

export default Homepage;
