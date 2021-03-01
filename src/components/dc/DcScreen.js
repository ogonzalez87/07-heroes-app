import React from "react";
import { HeroLists } from "../heroes/HeroLists";

export const DcScreen = () => {
  return (
    <div>
      <h1>DcScreen</h1>
      <hr />
      <HeroLists publisher="DC Comics" />
    </div>
  );
};
