import React, { useRef } from 'react';
import Hero from './SchoolLifeHero.jsx';
import SchoolGallery from './SchoolGallery.jsx';
import FooterContact from '../Footer/FooterContact.jsx';
import SportSection from '../Sports/Sports.jsx';


function SchoolLife() {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-gray-100"
    //   style={{ overflow: 'auto', height: '100vh' }}
    >
      <Hero />
      <SchoolGallery />
      <SportSection />
      <FooterContact /> 
    </div>
  );
}

export default SchoolLife;
