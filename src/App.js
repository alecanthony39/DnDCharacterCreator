import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CreateC from "./Components/CreateChar";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CharacterCreator" element={<CreateC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
