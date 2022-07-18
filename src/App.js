import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(iteam => {
    return (
      <Card
        img={iteam.coverImg}
        rating={iteam.stats.rating}
        reviewCount={iteam.stats.reviewCount}
        location={iteam.location}
        title={iteam.title}
        price={iteam.price}

        // you can also do like this:-

        // iteam= {iteam} in order to do this you have to replace props.whatever into props.iteam.whatever.
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}


