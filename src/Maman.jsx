import React from 'react';
import mamanImage from "./images/maman.jpg";

export default function Maman() {
  return (
    <div className="Maman">
      <h3>Bonne fête Maman !</h3>
      <img src={mamanImage} alt={"Bonne fête !"}/>
    </div>
  );
}
