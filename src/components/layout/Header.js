import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Home from "./Home";
import Routes from '../routes/Routes';

import { Mastercontext } from "../useContext/MasterContext";

const Header = (props) => {
    const [masterData, setMasterData] = useState({});
    const pathname = props.location.pathname;
    
    return (
        <>
            {pathname === "/"|| pathname === "/signup" ? (<Routes />) :
                (<Mastercontext.Provider value={{ masterData, setMasterData }}>
          <Home />
        </Mastercontext.Provider>)}
        
        </>
    )
}

export default withRouter(Header);