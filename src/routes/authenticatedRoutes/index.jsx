import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../../components/AuthenticatedApp/views/Dashboard';
import LPOs from '../../components/AuthenticatedApp/views/Lpos/LPOs';
import LPODetails from '../../components/AuthenticatedApp/views/Lpos/LPODetails';


function AuthenticatedRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard />} /> 
            <Route path="/lpos" element={<LPOs />} />
            <Route path="/lpos-details" element={<LPODetails />} />
        </Routes>
    )
}

export default AuthenticatedRoutes