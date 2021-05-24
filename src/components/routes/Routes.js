import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sigin from "../signup/Singin";
import Signup from "../signup/Signup";
import UserList from "../users/UserList";
import Home from "../layout/Home";
import Orders from "../orders/Orders";

function Routes() {
  return (
    <Switch>
      {/* <Route exact path="/" component={Sigin} />
      <Route exact path="/signup" component={Signup} /> */}
      {/* <Route exact path="/home" component={Home} /> */}
      <Route exact path="/users" component={UserList} />
      <Route exact path="/orders" component={Orders} />
    </Switch>
  );
}

export default Routes;
