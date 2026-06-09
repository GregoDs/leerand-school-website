import React, { useRef } from 'react';
import Hero from './Hero.jsx';
import FooterContact from '../../Footer/FooterContact.jsx';
import ContactInfo from './ContactInfo.jsx';


function Contacts() {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-gray-100"
    //   style={{ overflow: 'auto', height: '100vh' }}
    >
      <Hero />
      <ContactInfo />
      <FooterContact />
    </div>
  );
}

export default Contacts;
