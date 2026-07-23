import React from 'react';
import { motion } from 'framer-motion';
import schoolLifeHeroVideo from '../../assets/photos/selected/school-life-swimming-hero.MOV';
import './SchoolLife.css';

const Hero = () => {
  return (
    <section data-nav-theme="light" className="w-full h-screen relative overflow-hidden">

      <video
        src={schoolLifeHeroVideo}
        aria-label="Leerand pupils enjoying swimming"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center z-20 px-4 pb-[0vh]">

        <motion.p
          className="school-life-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          
        </motion.p>

        <motion.h1
          className="school-life-hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        >
          School Life
        </motion.h1>

        <motion.p
          className="school-life-hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          We want our pupils to discover perspectives that go beyond what is<br />
          said in the classroom.
        </motion.p>

        <motion.div
          className="w-px h-[180px] bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.35 }}
        />

      </div>
    </section>
  );
};

export default Hero;
