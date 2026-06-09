import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mainImage from '../../../assets/Admissions/Main-building-aerial-1066x714.webp';

const steps = [
  {
    title: '1) Enquiry',
    heading: 'Enquiry',
    content: (
      <>
        <p>
          Complete an <a href="#" className="underline font-semibold">enquiry form</a> or contact the admissions office on <strong>01258 484 633</strong> for us to take your information over the phone.
        </p>
        <p className="mt-4">
          We can send all admissions journey information and answer any initial questions you may have.
        </p>
      </>
    ),
    image: mainImage,
  },
  {
    title: '2) Visit us',
    heading: 'Visit us',
    content: (
      <>
        <p>
        Come and experience Leerand at one of our open mornings, or book a private tour. We strongly encourage parents and children to visit before registering.,
        </p>
      </>
    ),
    image: mainImage,
  },
  {
    title: '3) Registration',
    heading: 'Registration',
    content: (
      <>
        <p>
          Secure your child’s place by registering officially. We’ll provide forms and support every step of the way.
        </p>
      </>
    ),
    image: mainImage,
  },
  {
    title: '4) Meet the Head',
    heading: 'Meet the Head',
    content: (
      <>
        <p>
        We invite all registered families to meet the Head during Grade 6 or early Grade 7. This is an opportunity to talk about your child and ask questions.
        </p>
      </>
    ),
    image: mainImage,
  },
  {
    title: '5) Assessment',
    heading: 'Assessment',
    content: (
      <>
        <p>
        Children take part in our assessment day in Grade 7. This helps us understand their strengths and how they’ll thrive at Leerand.
        </p>
      </>
    ),
    image: mainImage,
  },
  {
    title: '6) Offer a place',
    heading: 'Offer a place ',
    content: (
      <>
        <p>
         We will make offers to successful candidates shortly after the assessment. You’ll be asked to confirm acceptance by the March prior to entry.
        </p>
      </>
    ),
    image: mainImage,
  },
];

const RegistrationJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((activeIndex + 1) % steps.length);
  const handlePrev = () => setActiveIndex((activeIndex - 1 + steps.length) % steps.length);

//   const handleNext = () => {
//     if (activeIndex < steps.length - 1) {
//       setActiveIndex(activeIndex + 1);
//     }
//   };
  
//   const handlePrev = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     }
//   };

  return (
    <section className="bg-white py-36 px-4 md:px-24 font-montserrat relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gray-950 -translate-x-1/2 " />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-6xl md:text-7xl font-normal mb-10 font-serif mt-12"
        style={{ fontFamily: 'Big Caslon, sans' }}
        >
        Our 13+ Admissions Journey
        </motion.h2>

      {/* Navigation Bar */}
        <div className="relative  mb-4">
        <div
            className="flex gap-32 transition-transform duration-500 ease-in-out"
            style={{
            transform: `translateX(-${activeIndex * 120}px)`, // Adjust this px to match button width + spacing
            minWidth: 'max-content',
            paddingRight: '200px', // Allow partial next item
            }}
        >
            {steps.map((step, index) => (
            <button
                key={index}
                className={`text-4xl md:text-5xl font-normal font-serif whitespace-nowrap transition-all duration-300 ${
                activeIndex === index ? 'text-black' : 'text-gray-300'
                }`}
                style={{
                fontFamily: 'Big Caslon, sans',
                minWidth: '180px', // Force buttons to be wider and consistent
                }}
                onClick={() => setActiveIndex(index)}
            >
                {step.title.replace(')', '')}
            </button>
            ))}
        </div>
        </div>

      {/* Slide Content */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Area */}
        <div className="flex-1">
        <div className="flex gap-4 -mt-36  mb-16"> {/* Added container with flex and gap */}
                <button 
                    onClick={handlePrev} 
                    aria-label="Previous"
                    className="p-2 focus:outline-none" // Added basic button styles
                >
                    <svg width="62" height="62" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="21" fill="#F5C518" />
                    <g transform="translate(32, 15) scale(-1, 1)">
                        <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" 
                            fill="black" />
                    </g>
                    </svg>
                </button>

                <button 
                    onClick={handleNext} 
                    aria-label="Next"
                    className="p-2 focus:outline-none" // Added basic button styles
                >
                    <svg width="62" height="62" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="21" fill="#F5C518" />
                    <g transform="translate(11, 15)">
                        <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" 
                            fill="black" />
                    </g>
                    </svg>
                </button>
                </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >

                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6" style={{ fontFamily: 'Big Caslon, serif' }}>
                {steps[activeIndex].heading}
                </h3>

              <div className="text-gray-800 text-base md:text-lg space-y-4">
                {steps[activeIndex].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Area */}
        <div className="flex-1">
            <AnimatePresence mode="wait">
                <motion.img
                key={steps[activeIndex].image}
                src={steps[activeIndex].image}
                alt="Step Image"
                className="w-full h-auto shadow-xl max-w-[1400px] mx-auto object-cover min-h-[530px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-px h-28 mt-80 bg-gray-950 -translate-x-1/2" />
    </section>
  );
};

export default RegistrationJourney;