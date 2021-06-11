import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "../src/components/routes/Routes";
import Home from "../src/components/layout/Home";

function App() {
  return (
    <div>
      {/* <Routes /> */}
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
