import React from 'react';

const Hero = () => {
  return (
    <section
      data-nav-theme="dark"
      className="w-full min-h-[36vh] md:min-h-[100vh] flex items-end relative overflow-hidden bg-white"
    >
      <img
        src="/src/assets/hero_imgs/LeerandLandingPage.jpg"
        
        alt="Leerand Schools"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default Hero;
