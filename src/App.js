import React from "react";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import { BrowserRouter as Router } from "react-router-dom";

import Header from "../src/components/layout/Header";



function App() {

  return (
    <div>
   
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    </div>
  );
}

export default App;
