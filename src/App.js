import React, { Component } from "react";
import TitlesAndIcons from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SnowStorm from 'react-snowstorm';



function App() {
  
  return (
    <div className="App">
      <Header />
      <TitlesAndIcons />
      <AboutSection />
      <SkillSection />
      <SnowStorm/>
     
    </div>
  );
}

export default App;
