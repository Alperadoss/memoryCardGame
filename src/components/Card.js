import React from "react";

function Card(props) {
  const {
    card: { src, title },
    handleGameLogic,
  } = props;

  return (
    <button className="card" onClick={handleGameLogic.bind(this, title)}>
      <figure>
        <img src={src} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </button>
  );
}

export default Card;
