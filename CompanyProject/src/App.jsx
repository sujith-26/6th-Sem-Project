import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Navigation Bar/Navigation";
import Home from "./Components/Home";
import BookingPage from "./Components/BookAppoinment";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<BookingPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </Router>
  );
};

export default App;
