import React, { useState } from "react";
import { SearchContainer } from "./style";

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
      <input
        onChange={(evt) => setSearchValue(evt.target.value)}
        value={searchValue}
        placeholder="Buscar"
      />

      <div>
        <button onClick={() => handleLimpar()}>Limpar</button>
        <button onClick={() => search()} className="primary">
          Buscar
        </button>
      </div>
    </SearchContainer>
  );
}

export default SearchInput;
