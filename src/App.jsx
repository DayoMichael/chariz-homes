import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages";
import PropertyPage from "./pages/property";
import PropertyView from "./pages/propertyView";
import PropertyListView from "./pages/PropertyListView";
import Services from "./pages/services";
import Signup from "./pages/onboarding/signup";
import Login from "./pages/onboarding/login";
import NewPassword from "./pages/onboarding/newpassword";
import OTPView from "./pages/onboarding/otp";
import ResetPassword from "./pages/onboarding/resetpassword";
import ResetSuccessful from "./pages/onboarding/resetsuccessfull";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
       
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<PropertyListView />} />
        <Route path="/property-view" element={<PropertyView />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/newpassword" element={<NewPassword />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
        <Route path="/resetsuccessful" element={<ResetSuccessful />}/>
        <Route path="/otp" element={<OTPView />}/>
      </Routes>
    </Router>
  )
}

export default App
