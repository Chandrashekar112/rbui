import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sigin from "../signup/Singin";
import Signup from "../signup/Signup";
import UserList from "../users/UserList";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Sigin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={UserList} />
      </Switch>
    </Router>
  );
}

export default Routes;
