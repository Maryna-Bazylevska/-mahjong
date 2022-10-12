import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
let randomNumberay = Array.apply(1, Array(16)).map(function () {
  return Math.floor((Math.random() * 60) % 100);
});

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [num, setNum] = useState(null);

  useEffect(() => {
    shuffleCards();
  }, []);
  const shuffleCards = () => {
    const shuffledCards = [...randomNumberay, ...randomNumberay];
    shuffledCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, status: "", num, id: Math.random() }));
    setCards(shuffledCards);
  };

  return (
    <div className="container">
      {cards.map((num, index, id, card) => {
        return <Card num={num} key={index} card={card} index={index} />;
      })}
    </div>
  );
}
