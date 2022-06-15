import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import Searchinput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";

const Homepage = () => {
  return (
    <StyledPage>
      <Header />
      <Searchinput />
      <ul>
        <li>
          <Client />
        </li>
      </ul>
    </StyledPage>
  );
};

export default Homepage;
