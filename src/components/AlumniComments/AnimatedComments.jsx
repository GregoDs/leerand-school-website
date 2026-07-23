import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnimatedComments.css';

import emilia from '../../assets/leerand-photos/child-gifted2.jpg';
import anthony from '../../assets/leerand-photos/boy-gifted.jpg';
import samuel from '../../assets/leerand-photos/boy-gifted.jpg';
import aisha from '../../assets/leerand-photos/child-gifted2.jpg';

const comments = [
  {
    text: 'Leerand helped me find my direction. I found my individuality, my confidence and the courage to lead with purpose.',
    name: 'Emilia Fox',
    role: 'Alumna',
    img: emilia,
    portraitSize: 'tall',       // ~600px tall — full editorial portrait
    profileSize: 'sm',
  },
  {
    text: 'Leerand felt like home. The teachers knew how to stretch us, support us and make school feel full of possibility.',
    name: 'Anthony Appiah',
    role: 'Former Pupil',
    img: anthony,
    portraitSize: 'medium',     // ~460px — balanced square feel
    profileSize: 'md',
  },
  {
    text: 'At Leerand, I discovered my passion for science and made lifelong friends. It shaped how I think about the future.',
    name: 'Samuel Kimani',
    role: 'Alumnus',
    img: samuel,
    portraitSize: 'compact',    // ~360px — tighter crop
    profileSize: 'sm',
  },
  {
    text: 'The support at Leerand was incredible. I grew in confidence and learned to believe in my own voice.',
    name: 'Aisha Mwangi',
    role: 'Alumna',
    img: aisha,
    portraitSize: 'wide',       // ~520px — slightly wider crop
    profileSize: 'lg',
  },
];

const ArrowIcon = ({ reverse = false }) => (
  <svg width="36" height="36" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#F5C518" />
    <g transform={reverse ? 'translate(30, 14) scale(-1, 1)' : 'translate(12, 14)'}>
      <path
        d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z"
        fill="black"
      />
    </g>
  </svg>
);

export default function AnimatedComments() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const comment = comments[index];

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % comments.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + comments.length) % comments.length);
  };

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 28 : -28,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -28 : 28,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-rail testimonial-rail-top" />

      <div className="testimonial-shell">
        {/* ── Copy panel ── */}
        <div className="testimonial-copy-panel">

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={`${index}-label`}
              className="testimonial-label"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            >
              Beyond Leerand
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.blockquote
              key={`${index}-quote`}
              className="testimonial-quote"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            >
              "{comment.text}"
            </motion.blockquote>
          </AnimatePresence>

          <div className="testimonial-footer">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={`${index}-profile`}
                className={`testimonial-profile profile-size-${comment.profileSize}`}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <img src={comment.img} alt={comment.name} className="profile-img" />
                <span className="profile-text">
                  <strong>{comment.name}</strong>
                  <span>{comment.role}</span>
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-nav">
              <button className="testimonial-nav-btn" onClick={prev} aria-label="Previous testimonial">
                <ArrowIcon reverse />
              </button>
              <button className="testimonial-nav-btn" onClick={next} aria-label="Next testimonial">
                <ArrowIcon />
              </button>
            </div>
          </div>

        </div>

        {/* ── Portrait panel — height varies per slide ── */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={`${index}-portrait`}
            className={`testimonial-portrait-panel portrait-${comment.portraitSize}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
          >
            <img src={comment.img} alt="" className="testimonial-portrait" />
            <div className="testimonial-portrait-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{comment.name}</strong>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="testimonial-rail testimonial-rail-bottom" />
    </section>
  );
}