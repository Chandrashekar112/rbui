import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Retailer from "../mainComponents/retailer/Retailer";
import Supplier from "../mainComponents/supplier/Supplier";

function Routes() {
  return (
    <Switch>
      <Route exact path="/retailer" component={Retailer} />
      <Route exact path="/supplier" component={Supplier} />
    </Switch>
  );
}

export default Routes;
