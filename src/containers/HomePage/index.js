import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDados } from "../../actions";
import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import { Container, Cabecalho } from "./style";

function HomePage(props) {
  const { paises, getDados } = props;

  const [displayedItems, setDisplayedItems] = useState(paises);

  const ordenados = [...paises];

  ordenados.sort(function (a, b) {
    if (a.cases < b.cases) {
      return 1;
    }
    if (a.cases > b.cases) {
      return -1;
    }
    return 0;
  });

  useEffect(() => getDados(), [getDados]);

  useEffect(() => setDisplayedItems(paises), [paises]);

  return (
    <div>
      <Container>
        <div className="cardsRow">
          <Card
            title="Os 5 países com maior número de casos"
            data={ordenados.splice(1, 5)}
          />
          <Card
            title="Os 5 países com menor número de casos"
            data={ordenados.splice(ordenados.length - 5, 5)}
          />
        </div>

        <Cabecalho>
          <h2>Covid-19 ao redor do mundo</h2>
          <SearchInput items={paises} setDisplayedItems={setDisplayedItems} />
        </Cabecalho>
        {displayedItems.length > 0 && <Table data={displayedItems} />}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  paises: state.paisesStore.paises,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getDados }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
