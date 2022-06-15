import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import SearchInput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";
import Loading from "../components/Loading/Loading";

const Homepage = () => {
  return (
    <StyledPage>
      <Header />
      <SearchInput />
      <Loading />
      <ul>
        <li>
          <Client />
        </li>
      </ul>
    </StyledPage>
  );
};

export default Homepage;
