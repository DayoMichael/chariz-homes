import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages";
import PropertyPage from "./pages/property";
import PropertyView from "./pages/propertyView";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/property-view" element={<PropertyView />} />
      </Routes>
    </Router>
  )
}

export default App
