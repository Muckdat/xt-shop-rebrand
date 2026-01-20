import React from 'react';
import Hero from './components/Hero';
import Brands from './components/Brands';
import BrandsLogos from './components/BrandsLogos';
import Header from './components/Header';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Story from './components/Story';
import TechSpecs from './components/TechSpecs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Brands />
      <BrandsLogos />
      <Categories />
      <Story />
      <TechSpecs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
