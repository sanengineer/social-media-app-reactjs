import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components
import Landing from "./pages/landing";

//Importing stylesheet
import "sanstrap/dist/css/sanstrap.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
