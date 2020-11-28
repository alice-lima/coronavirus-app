import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 3rem;

  .cardsRow {
    display: flex;
    margin-left: -24px;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Titulo = styled.h1`
  font-size: 26px;
  color: #fff;
  margin-bottom: 24px;
`;
