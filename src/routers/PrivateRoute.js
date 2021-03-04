import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </div>
  );
};

PrivateRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
