import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SigninPage from "./components/onboarding/SigninPage";
import AuthenticatedRoutes from "./routes/authenticatedRoutes";
import { PublicRoute } from "./routes/routeRules/PublicRoute";
import { PrivateRoute } from "./routes/routeRules/PrivateRoute";
import SignupPage from "./components/onboarding/SIgnupPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PublicRoute> <SigninPage /></PublicRoute>} />
        <Route exact path="/onboard" element={<PublicRoute> <SignupPage /></PublicRoute>} />
        <Route path="/dashboard/*" element={<PrivateRoute> <AuthenticatedRoutes /> </PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
