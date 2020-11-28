import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const Texto = styled.h2`
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  margin: 0 24px;
`;

export const Numero = styled.h3`
  font-size: 36px;
  color: #fff;
  margin: 12px 24px;
  color: red;
`;

export const Imagem = styled.div`
  background-color: #fff;
  border-radius: 100%;
  width: 80px;
  height: 80px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
