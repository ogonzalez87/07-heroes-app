import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { AuthContext } from "../auth/AuthContext";
import { DashBoardRouters } from "./DashBoardRouters";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute
            path="/"
            component={DashBoardRouters}
            isAuthenticates={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
