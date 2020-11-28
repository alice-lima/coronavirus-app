import React from "react";
import icone from "../../images/world.png";

import { Container, Texto, Numero, Info, Imagem } from "./style";

export default ({ number }) => {
  return (
    <Container>
      <Imagem>
        <img src={icone} alt="Icone Globo" />
      </Imagem>
      <Info>
        <Texto>Total de casos no Mundo</Texto>
        <Numero>{number}</Numero>
      </Info>
    </Container>
  );
};
