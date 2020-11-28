import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getDados } from "../../actions";
import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import { Container, Cabecalho, Titulo } from "./style";
import CardWorld from "../../components/CardWorld";

function HomePage(props) {
  const { paises } = props;

  const [displayedItems, setDisplayedItems] = useState(paises);

  const dispatch = useDispatch();

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

  const getDadosAPI = () => {
    dispatch(getDados());
  };

  useEffect(() => {
    getDadosAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setDisplayedItems(paises), [paises]);

  return (
    <div>
      <Container>
        {console.log(ordenados)}
        <Titulo>Covid-19 ao redor do mundo</Titulo>
        <div className="cardsRow">
          <Card
            title="Os 5 países com maior número de casos"
            data={ordenados.splice(1, 5)}
          />
          <Card
            title="Os 5 países com menor número de casos"
            data={ordenados.splice(ordenados.length - 5, 5)}
          />
          <CardWorld number={ordenados.length > 0 ? ordenados[0].cases : 0} />
        </div>

        <Cabecalho>
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

/* const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getDados }, dispatch); */

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
