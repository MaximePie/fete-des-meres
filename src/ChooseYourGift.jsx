import React from 'react';
import {Link} from "react-router-dom";

export default function ChooseYourGift() {
    return (
        <div className="ChooseYourGift">
          <h2>Avez-vous été sage ?</h2>
          <h4>Dans ce cas, vous pouvez choisir une des deux surprises ici</h4>
          <div className="Gifts">
            <div className="Gift">
              <Link to="/mamie">
                <p className="Gift__text">
                  Si vous êtes la personne la plus cultivée, la mieux organisée,
                  la plus généreuse et la plus appliquée, cliquez ici.
                </p>
              </Link>
            </div>
            <div className="Gift">
              <Link to="/maman">
                <p className="Gift__text">
                  Si vous êtes la personne la plus sage, la plus à l'écoute,
                  la plus créative, et la plus résiliente, cliquez ici.
                </p>
              </Link>
            </div>
          </div>
        </div>
    );
}
