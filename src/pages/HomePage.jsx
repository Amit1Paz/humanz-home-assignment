import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import Searchinput from "../components/SearchInput/SearchInput";

const Homepage = () => {
  return (
    <StyledPage>
      <Header />
      <Searchinput />
    </StyledPage>
  );
};

export default Homepage;
