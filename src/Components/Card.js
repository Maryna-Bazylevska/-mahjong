import { useState, useEffect } from "react";

export default function Card({ num, card, handleChoice, id, flipped, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const clickOnCard = () => {
    setIsOpen(!isOpen);

    changeCard();
  };
  const changeCard = () => {
    setTimeout(() => {
      setIsOpen(isOpen);
    }, 100);
  };

  return (
    <div className="card" onClick={clickOnCard}>
      <div className={`card-front${isOpen ? "card-front.active" : ""}`}>
        {num}
      </div>
    </div>
  );
}
