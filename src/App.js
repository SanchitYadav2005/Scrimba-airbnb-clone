import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from "./components/Card"
import img from "./images/katie-zaferes.png"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img = {img}
        rating = "5"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  );
}


