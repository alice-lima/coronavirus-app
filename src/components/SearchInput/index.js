import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchContainer, InputIcones, PrimaryButton } from "./style";

function SearchInput(props) {
  const { items, setDisplayedItems } = props;
  const [searchValue, setSearchValue] = useState("");

  function search() {
    function hasAnyParamMatch(param) {
      const { country } = param;
      const searchValueLowerCase = searchValue.toLocaleLowerCase();
      return country.toLowerCase().includes(searchValueLowerCase);
    }

    if (searchValue !== "") {
      const toDisplay = items.filter((country) => hasAnyParamMatch(country));

      setDisplayedItems(toDisplay);
    } else {
      setDisplayedItems(items);
    }
  }

  function handleLimpar() {
    setSearchValue("");
    setDisplayedItems(items);
  }

  return (
    <SearchContainer>
      <InputIcones>
        <FontAwesomeIcon icon={faSearch} size="lg" />
        <input
          onChange={(evt) => setSearchValue(evt.target.value)}
          value={searchValue}
          placeholder="Buscar"
        />

        {searchValue.length > 0 && (
          <button onClick={() => handleLimpar()}>&times;</button>
        )}
      </InputIcones>

      <div>
        <PrimaryButton onClick={() => search()} className="primary">
          Buscar
        </PrimaryButton>
      </div>
    </SearchContainer>
  );
}

export default SearchInput;
