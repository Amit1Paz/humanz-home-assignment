import { StyledSearchInput } from "./SearchInput.styled";
import SearchIcon from "../../assets/images/search-icon.svg";

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <img src={SearchIcon} alt="search" />
      <input type="search" placeholder="Search..." />
    </StyledSearchInput>
  );
};

export default SearchInput;
