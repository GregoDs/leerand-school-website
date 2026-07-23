import React from 'react';
import { motion } from 'framer-motion';
import contactsHero from '../../../assets/photos/selected/sports-day-green-team-cheer.jpg';

const Hero = () => {
  return (
    <section data-nav-theme="light" className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        src={contactsHero}
        alt="Leerand Schools"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center z-20 px-4 pb-[0vh]">
        <motion.h1
          className="text-[48px] md:text-[80px] leading-tight font-normal mb-6"
          style={{ fontFamily: 'Big Caslon FB, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="w-px h-[180px] bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </section>
  );
};

export default Hero;
