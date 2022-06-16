import { useEffect, useState, useRef } from "react";
import { StyledPage, StyledFlexContainer } from "./StyledPage";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import Client from "../components/Client/Client";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import useAxios from "../hooks/useAxios";
import Button from "../components/Button/Button";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef();

  const { response, isLoading, error } = useAxios(
    "get",
    `/clients?page=${currentPage}&searchName=${searchValue}`
  );

  useEffect(() => {
    if (response) {
      setData(response.data.clients);
      setCurrentPage(response.data.pages.current);
      setNextPage(response.data.pages.next);
      setPrevPage(response.data.pages.prev);
    }
  }, [response]);

  const switchPage = (direction) => {
    if (direction === "next") {
      setCurrentPage((currentPage) => currentPage + 1);
    } else {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  return (
    <StyledPage>
      <Header setData={setData} />
      <SearchInput searchRef={searchRef} setSearchValue={setSearchValue} />
      {isLoading && <Loading />}
      {error && <Error error={error.response.status} />}
      {data && (
        <ul>
          {data.map((client, index) => {
            return (
              <li key={index}>
                <Client
                  setData={setData}
                  name={client.Name}
                  id={client.ID}
                  email={client.Email}
                  phone={client.Phone}
                  ip={client.IP}
                  searchValue={searchValue}
                />
              </li>
            );
          })}
        </ul>
      )}
      <StyledFlexContainer>
        {prevPage && (
          <Button onClick={() => switchPage("prev")}>Previous</Button>
        )}
        {nextPage && <Button onClick={() => switchPage("next")}>Next</Button>}
      </StyledFlexContainer>
    </StyledPage>
  );
};

export default Homepage;
