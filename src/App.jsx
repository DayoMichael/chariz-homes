import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages";
import PropertyPage from "./pages/property";
import PropertyView from "./pages/propertyView";
import PropertyListView from "./pages/PropertyListView";
import Services from "./pages/services";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<PropertyListView />} />
        <Route path="/property-view" element={<PropertyView />} />
      </Routes>
    </Router>
  )
}

export default App
