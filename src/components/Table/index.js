import React from "react";
import { Header, Cell, Row } from "./style";

function Table(props) {
  const { data } = props;

  return (
    <table>
      <tr>
        <Header>País</Header>
        <Header>Casos</Header>
        <Header>Casos - Hoje</Header>
        <Header>Mortes</Header>
        <Header>Mortes - Hoje</Header>
        <Header>Recuperados</Header>
        <Header>Ativos</Header>
        <Header>Críticos</Header>
        <Header>Casos p/milhão</Header>
        <Header>Mortes p/milhão</Header>
        <Header>Total de testes</Header>
        <Header>Testes p/milhão</Header>
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
          <Row>
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
          </Row>
        );
      })}
    </table>
  );
}

export default Table;
