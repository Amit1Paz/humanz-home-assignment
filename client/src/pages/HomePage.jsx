import Header from "../components/Header/Header";
import { StyledPage } from "./StyledPage";
import SearchInput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";
import axios from 'axios';

const Homepage = () => {
  const fetch = async () => {
    const res = await axios.get('http://localhost:8001/clients')
    console.log(res)
  }
  fetch();
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
