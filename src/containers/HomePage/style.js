import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 3rem;

  .cardsRow {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
`;
