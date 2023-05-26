import React from "react";
import "./CardRace.css";

function CardRace() {
  return (
    <div className="cardRace-container">
      <div className="cardRace">
        <div className="div1">
          <p className="name">Lucas</p>
          <p>00:00:000</p>
        </div>
        <div className="div2">
          <p className="vs">VS</p>
        </div>
        <div className="div3">
          <p className="name">Dudu</p>
          <p>00:00:000</p>
        </div>
        <div className="sticker"></div>
      </div>
    </div>
  );
}

export default CardRace;
