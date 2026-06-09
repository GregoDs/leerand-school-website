import { motion } from 'framer-motion';
import React from 'react';
import juniorImage from '../../../assets/Admissions/Bryanston-prep-5.webp';

const ctaButton = (label) => (
  <button
    className="junior-cta-btn group flex items-center gap-3 sm:gap-4 mt-4"
    aria-label={label}
  >
    <span className="text-xs sm:text-sm tracking-widest uppercase text-gray-700">
      {label}
    </span>
    <span className="junior-arrow-circle">
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

export default function JuniorSchoolEntry() {
  return (
    <section className="w-full bg-gray-100 py-16 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Section with animation */}
       <div 
          className="lg:w-1/2 w-full"
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
                junior school
            </span>{' '}
            <span className="not-italic" style={{ fontFamily: 'Big Caslon FB, serif' }}>
                entry
            </span>
            </motion.h2>
          <p className="mt-10 sm:mt-12 text-base sm:text-lg text-[#1c1c1c]">
            Children may join our{' '}
            <strong className="underline">Junior school</strong> at any point during the academic year.
          </p>
          <p className="mt-6 text-base sm:text-lg text-[#1c1c1c]">
            Our classes ensure that all new arrivals are made to feel welcome and are able to integrate seamlessly
            into our Leerand School community.
          </p>

          <div className="mt-10 space-y-4">
            {ctaButton('Junior School Admissions')}
            {ctaButton('Book a Junior School Visit')}
            {ctaButton('Complete Enquiry Form for Junior School')}
            {ctaButton('Register your child for Junior School')}
          </div>
        </div>

        {/* Image Section with animation */}
        <motion.div
          className="lg:w-1/2 w-full max-w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={juniorImage}
            alt="junior school children"
            className="w-full h-auto shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}