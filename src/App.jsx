import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BestDishes from './components/BestDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <BestDishes />
        <Menu />
        <Gallery />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;