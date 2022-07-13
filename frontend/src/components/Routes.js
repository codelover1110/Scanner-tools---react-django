import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes , Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import NotFound from '../components/Common/NotFound' ;    
import MSTool from "../pages/MSTool";

const Routing = () => {
    return (
        <Routes>
            <Route path="/mstool/*" element={<MSTool />} />
        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
