import React, { useState } from 'react';

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    if (isFlipped) return;
    setIsFlipped(true);
    props.onCardClick(props.id, props.name);
  }

  return (
    <div className={`card ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Card;
