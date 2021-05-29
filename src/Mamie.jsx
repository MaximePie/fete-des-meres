import React from 'react';
import mamieImage from "./images/mamie.png";

export default function Mamie() {
    return (
        <div className="Mamie">
          <h3>Bonne fête Mamie !</h3>
          <img src={mamieImage}/>
        </div>
    );
}
