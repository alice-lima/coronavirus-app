import React from "react";
import { Header, Cell } from "./style";

function Table(props) {
  const { data } = props;

  const keys = Object.keys(data[0]);

  return (
    <table>
      <tr>
        {keys.map((k) => {
          return <Header>{k}</Header>;
        })}
      </tr>

      {data.map((countryParam) => {
        const {
          country,
          cases,
          todayCases,
          deaths,
          todayDeaths,
          recovered,
          active,
          critical,
          casesPerOneMillion,
          deathsPerOneMillion,
          totalTests,
          testsPerOneMillion,
        } = countryParam;
        return (
          <tr>
            <Cell>{country}</Cell>
            <Cell>{cases}</Cell>
            <Cell>{todayCases}</Cell>
            <Cell>{deaths}</Cell>
            <Cell>{todayDeaths}</Cell>
            <Cell>{recovered}</Cell>
            <Cell>{active}</Cell>
            <Cell>{critical}</Cell>
            <Cell>{casesPerOneMillion}</Cell>
            <Cell>{deathsPerOneMillion}</Cell>
            <Cell>{totalTests}</Cell>
            <Cell>{testsPerOneMillion}</Cell>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
