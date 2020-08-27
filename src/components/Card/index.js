import React from "react";
import { Container, Row } from "./style";

function Card(props) {
  const { title, data } = props;

  return (
    <Container>
      <div className="title">{title}</div>
      <div className="body">
        {data.map((item) => {
          return (
            <Row>
              <strong>{item.country}</strong>
              <span>{item.cases}</span>
            </Row>
          );
        })}
      </div>
    </Container>
  );
}

export default Card;
