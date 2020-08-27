import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDados } from "../../actions";
import { Container } from "./style";
import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";

function HomePage(props) {
  const { paises, getDados } = props;

  const [displayedItems, setDisplayedItems] = useState(paises);

  useEffect(() => getDados(), [getDados]);

  useEffect(() => setDisplayedItems(paises), [paises]);

  return (
    <div>
      <Container>
        <SearchInput items={paises} setDisplayedItems={setDisplayedItems} />
        <h2>Covid-19 around the World</h2>
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
