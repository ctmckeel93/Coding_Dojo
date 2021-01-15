import React from "react";
import "./App.css";
import { Router } from "@reach/router";

// Pages
import Nav from "./components/Nav";
import Home from "./components/Home";
import RouteInput from "./components/RouteInput";
import TBColor from "./components/TBColor";
import TColor from "./components/TColor";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        {/* With using exact below, router will look only for that specific path */}
        <Home path="/" />
        <RouteInput path="/:id" />
        <TColor path="/:id/:tcolor" />
        <TBColor path="/:id/:tcolor/:bcolor" />
      </Router>
    </div>
  );
}

export default App;
