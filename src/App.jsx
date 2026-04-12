import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BestDishes from './components/BestDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <BestDishes />
        <Menu />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;