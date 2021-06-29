import React, { useState } from "react";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
// import "primereact/resources/themes/luna-pink/theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import Signin from "../src/components/mainComponents/signup/Signin";
import Signup from "../src/components/mainComponents/signup/Signup";
import Home from "../src/components/layout/Home";


import { Mastercontext } from "../src/components/useContext/MasterContext";

function App() {
  const [masterData, setMasterData] = useState({});
  return (
    <div>
      {/* <Routes /> */}
      {/* <Signin />
      <Signup /> */}
      <Router>
        <Mastercontext.Provider value={{ masterData, setMasterData }}>
          <Home />
        </Mastercontext.Provider>
      </Router>
    </div>
  );
}

export default App;
