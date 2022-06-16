import { StyledSearchInput } from "./SearchInput.styled";
import SearchIcon from "../../assets/images/search-icon.svg";
import Button from "../Button/Button";

const SearchInput = ({ searchRef, setSearchValue }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchRef.current.value);
    searchRef.current.value = '';
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <StyledSearchInput>
        <img src={SearchIcon} alt="search" />
        <input ref={searchRef} type="search" placeholder="Search..." />
        <Button onClick={handleSearchSubmit}>search</Button>
      </StyledSearchInput>
    </form>
  );
};

export default SearchInput;
