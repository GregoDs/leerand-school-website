import { motion } from 'framer-motion';
import React from 'react';
import prepImage from '../../../assets/Admissions/Bryanston-prep-5.webp';

const ctaButton = (label) => (
  <button
    className="pre-primary-cta-btn group flex items-center gap-3 sm:gap-4 mt-4"
    aria-label={label}
  >
    <span className="text-xs sm:text-sm tracking-widest uppercase text-white">
      {label}
    </span>
    <span className="pre-primary-arrow-circle">
      <svg width="38" height="38" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="21" r="21" fill="#F5C518" />
        <g transform="translate(12, 14)">
          <path
            d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z"
            fill="black"
          />
        </g>
      </svg>
    </span>
  </button>
);

export default function PrePrimaryEntry() {
  return (
    <section className="w-full bg-[rgb(24,28,41)] py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Image Section (Left) */}
        <motion.div
          className="lg:w-1/2 w-full max-w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={prepImage}
            alt="Pre Primary children"
            className="w-full h-auto shadow-md"
          />
        </motion.div>

        {/* Text Section (Right) */}
        <motion.div 
          className="lg:w-1/2 w-full text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-[2.5rem] sm:text-[3rem] md:text-[3.2rem] lg:text-[3.2rem] leading-tight font-normal mb-6 tracking-tight break-words"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="italic" style={{ fontFamily: 'Big Caslon FB, serif' }}>
              Pre Primary
            </span>{' '}
            <span className="not-italic" style={{ fontFamily: 'Big Caslon FB, serif' }}>
              entry
            </span>
          </motion.h2>

          <p className="mt-10 sm:mt-12 text-base sm:text-lg text-white">
            Children may join our{' '}
            <strong className="underline">Pre Primary</strong> at any point during the academic year.
          </p>
          <p className="mt-6 text-base sm:text-lg text-white">
            Our classes ensure that all new arrivals are made to feel welcome and are able to integrate seamlessly
            into our Leerand School community.
          </p>

          <div className="mt-10 space-y-4">
            {ctaButton('Pre Primary Admissions')}
            {ctaButton('Book a Pre Primary Visit')}
            {ctaButton('Complete Enquiry Form for Pre Primary')}
            {ctaButton('Register your child for Pre Primary')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}