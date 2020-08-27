import React from "react";

function Card(props) {
  const { title, data } = props;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Card;
