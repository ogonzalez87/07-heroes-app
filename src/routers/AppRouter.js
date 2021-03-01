import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
// import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DashBoardRouters } from "./DashBoardRouters";
// import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashBoardRouters} />
        </Switch>
      </div>
    </Router>
  );
};
