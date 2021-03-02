import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = getHeroesById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {
    if (history.length) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail"
          alt={superhero}
          src={`../assets/heroes/${heroeId}.jpg`}
        />
      </div>
      <div className="col-8">
        <h3> {superhero} </h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b> Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b> Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b> First apperance: </b> {first_appearance}
          </li>
        </ul>
        <h5> Charaters</h5>
        <p>{characters} </p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
