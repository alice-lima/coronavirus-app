import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDados } from "../../actions";

function HomePage(props) {
  const { paises, getDados } = props;

  return (
    <div>
      <h1>TESTE HOME PAGE</h1>
      <button onClick={() => getDados()}>Get Dados</button>
      <ul>
        {paises.map((pais) => {
          return <li>{pais.country}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  paises: state.paisesStore.paises,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getDados }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
