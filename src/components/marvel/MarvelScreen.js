import React from "react";
import { HeroLists } from "../heroes/HeroLists";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <HeroLists publisher="Marvel Comics" />
    </div>
  );
};
