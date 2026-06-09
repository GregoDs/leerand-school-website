import React from 'react';
import { motion } from 'framer-motion';
import schoolPortalHero from '../../assets/SchoolPortal_img/Bryanston-venue-hire-5-2560x1440.webp';
import './SchoolPortal.css';

const Hero = () => {
  return (
    <section data-nav-theme="light" className="school-portal-hero">
      <img
        src={schoolPortalHero}
        alt="Leerand SchoolPortal"
        className="school-portal-hero-img"
      />

      <div className="school-portal-hero-overlay" />

      <div className="school-portal-hero-content">
        <motion.h1
          className="school-portal-hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        >
          My School Portal
        </motion.h1>

        <motion.p
          className="school-portal-hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          Connect with the learning journey, school updates and essential
          <br />
          resources in one place.
        </motion.p>

        <motion.div
          className="school-portal-hero-divider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.35 }}
        />
      </div>
    </section>
  );
};

export default Hero;
