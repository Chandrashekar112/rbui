import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sigin from "../signup/Singin";
import Signup from "../signup/Signup";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Sigin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default Routes;
