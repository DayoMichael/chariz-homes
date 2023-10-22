import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../../components/dashboard/homepage';


function AuthenticatedRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />
        </Routes>
    )
}

export default AuthenticatedRoutes