import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Apartments from './components/Apartments';
import Amenities from './components/Amenities';
import CityThrills from './components/CityThrills';
// import Lifestyle from './components/Lifestyle';
// import Community from './components/Community';
// import Neighbourhood from './components/Neighbourhood';
// import Benefits from './components/Benefits';
// import Gallery from './components/Gallery';
// import Stats from './components/Stats';
// import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-neptune-text bg-white">
      <Navbar />
      <Hero />
      <Intro />
      <Apartments />
      <Amenities />
      <CityThrills />
      {/* <Lifestyle />
      <Community /> */}
      {/* <Neighbourhood />
      <Benefits />
      <Gallery />
      <Stats />
      <Testimonials />
      <Contact /> */}
      <CTA />
      <Footer />
    </div>
  );
}

export default App;