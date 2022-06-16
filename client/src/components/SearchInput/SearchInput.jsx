import { StyledSearchInput } from "./SearchInput.styled";
import SearchIcon from "../../assets/images/search-icon.svg";

const SearchInput = ({ searchRef, setSearchValue }) => {

  const handleSearchChange = () => {
    setSearchValue(searchRef.current.value);
  }

  return (
    <StyledSearchInput>
      <img src={SearchIcon} alt="search" />
      <input
        ref={searchRef}
        type="search"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
