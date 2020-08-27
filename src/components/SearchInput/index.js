import React, { useState, useEffect } from "react";

function SearchInput(props) {
  const { countries } = props;

  const [displayedCountries, setDisplayedEmpresas] = useState(countries);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    function hasParamMatch(countrieParam) {
      const { countrie } = countrieParam;
      const searchValueLowerCase = searchValue.toLocaleLowerCase();
      return (
        searchValueLowerCase === "" ||
        countrie.toLowerCase().includes(searchValueLowerCase)
      );
    }
    if (searchValue !== "") {
      const toDisplay = countries.filter((countrie) => hasParamMatch(countrie));
      setDisplayedEmpresas(toDisplay);
    } else {
      setDisplayedEmpresas(countries);
    }
  }, [searchValue, countries]);

  return <input onChange={(evt, data) => setSearchValue(data.value)} />;
}

export default SearchInput;
