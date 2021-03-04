import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { AuthContext } from "../auth/AuthContext";
import { DashBoardRouters } from "./DashBoardRouters";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={DashBoardRouters}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
