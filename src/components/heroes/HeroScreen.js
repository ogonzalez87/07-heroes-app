import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
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
  return (
    <div>
      <h1>HeroScreen</h1>
    </div>
  );
};
