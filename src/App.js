import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import Recentsearches from "./components/RecentSearches/Recentsearches";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<About></About>} path="/about"></Route>
        <Route
          element={<Recentsearches></Recentsearches>}
          path="/recentsearches"
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
