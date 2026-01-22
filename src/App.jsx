import React from 'react';
import Hero from './components/Hero';
import BrandsLogos from './components/BrandsLogos';
import Partner1 from './components/Partner1';
import Header from './components/Header';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Story from './components/Story';
import TechSpecs from './components/TechSpecs';
import Testimonials from './components/Testimonials';
import Partner2 from './components/Partner2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Partner1 />
      <BrandsLogos />
      <Categories />
      <Story />
      <TechSpecs />
      <Testimonials />
      <Partner2 />
      <Footer />
    </div>
  );
}

export default App;