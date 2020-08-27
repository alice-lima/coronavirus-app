import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDados } from "../../actions";
import { Container } from "./style";
import Table from "../../components/Table";

function HomePage(props) {
  const { paises, getDados } = props;

  useEffect(() => getDados(), [getDados]);

  return (
    <div>
      {paises.length > 0 && (
        <Container>
          <h2>Covid-19 around the World</h2>
          <Table data={paises} />
        </Container>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  paises: state.paisesStore.paises,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getDados }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
