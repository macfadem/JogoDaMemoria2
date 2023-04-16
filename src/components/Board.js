import React, { useState } from 'react';
import Card from './Card';

function Board(props) {
  const [selectedCards, setSelectedCards] = useState([]);

  function handleCardClick(id, name) {
    if (selectedCards.length === 0) {
      setSelectedCards([{ id, name }]);
    } else if (selectedCards.length === 1) {
      const firstCard = selectedCards[0];
      if (firstCard.name === name) {
        setSelectedCards([]);
      } else {
        setSelectedCards([...selectedCards, { id, name }]);
      }
    }
  }

  return (
    <div className="board">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default Board;
