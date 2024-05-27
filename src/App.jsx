import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomeView from "./pages";
import PropertyView from "./pages/propertyView";
import PropertyListView from "./pages/PropertyListView";
import Services from "./pages/services";
import Signup from "./pages/onboarding/signup";
import Login from "./pages/onboarding/login";
import NewPassword from "./pages/onboarding/newpassword";
import OTPView from "./pages/onboarding/otp";
import ResetPassword from "./pages/onboarding/resetpassword";
import ResetSuccessful from "./pages/onboarding/resetsuccessfull";
import BookStay from "./pages/bookStay";
import PropertyManagement from "./pages/PropertyManagement";
import PropertyType from "./pages/PropertyType";
import PropertyRequestView from "./pages/PropertyRequest";
import PropertyDashboardView from "./pages/PropertyDashboard";
import PropertySubmissionView from "./pages/PropertySubmission";
import PropertyAnalyticsView from "./pages/PropertAnalytics";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeView />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<PropertyListView />} />
        <Route path="/property-management" element={<PropertyManagement />} />
        <Route path="/property-view" element={<PropertyView />} />
        <Route path="/property-request" element={<PropertyRequestView />} />
        <Route path="/property-dashboard" element={<PropertyDashboardView />} />
        <Route path="/property-submission" element={<PropertySubmissionView />} />
        <Route path="/property-analytics" element={<PropertyAnalyticsView />} />
        <Route path="/property-type" element={<PropertyType />} />
        <Route path="/book-stay" element={<BookStay />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/newpassword" element={<NewPassword />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
        <Route path="/resetsuccessful" element={<ResetSuccessful />}/>
        <Route path="/otp" element={<OTPView />}/>
        {/* Redirect all unknown routes to '/' */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
