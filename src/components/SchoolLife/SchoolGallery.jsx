import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SchoolGallery.css';

import swimmer from '../../assets/hero_imgs/swimmer.jpg';
import sport from '../../assets/LearnMore/Sport-cricket-1196x1396-2.webp';
import scienceLab from '../../assets/Gallery/02de53e7a_generated_1929746d.png';
import roboticsLab from '../../assets/Gallery/329665b62_generated_565dd383.png';
import libraryDiscussion from '../../assets/Gallery/51a44fab5_generated_44e87ad7.png';
import artStudio from '../../assets/Gallery/661e29678_generated_d58feee5.png';
import earlyYearsPlay from '../../assets/Gallery/8059742a8_generated_f1b7cd60-3.png';
import readingCircle from '../../assets/Gallery/8c1091ccf_generated_3b483655.png';
import schoolCelebration from '../../assets/Gallery/8c87bb23d_generated_1ebccfc6.png';
import schoolChoir from '../../assets/Gallery/e742e1e6a_generated_276e1d4b-2.png';
import schoolCampus from '../../assets/Gallery/f73df50f0_generated_b4bfa08a.png';
import brightClassroom from '../../assets/Gallery/f83f152c1_generated_8b41e210.png';

const filters = ['All', 'Classrooms', 'Sports', 'Events', 'Arts'];

const galleryItems = [
  { title: 'Science in action', caption: 'Young scientists test ideas through practical discovery.', category: 'Classrooms', image: scienceLab, size: 'wide' },
  { title: 'Building the future', caption: 'Technology and teamwork turn bright ideas into working models.', category: 'Classrooms', image: roboticsLab, size: 'tall' },
  { title: 'Learning together', caption: 'Conversation and shared reading deepen understanding.', category: 'Classrooms', image: libraryDiscussion, size: 'standard' },
  { title: 'Creative expression', caption: 'Colour, imagination and making give every learner a voice.', category: 'Arts', image: artStudio, size: 'tall' },
  { title: 'Confidence in motion', caption: 'Sport gives learners space to stretch themselves.', category: 'Sports', image: swimmer, size: 'small' },
  { title: 'Playful beginnings', caption: 'Early years learning shaped by curiosity and imagination.', category: 'Classrooms', image: earlyYearsPlay, size: 'wide' },
  { title: 'Team spirit', caption: 'Competition, resilience and shared achievement.', category: 'Sports', image: sport, size: 'standard' },
  { title: 'A love of reading', caption: 'Quiet moments with books grow confidence and curiosity.', category: 'Classrooms', image: readingCircle, size: 'small' },
  { title: 'School celebrations', caption: 'Moments that bring the wider Leerand family together.', category: 'Events', image: schoolCelebration, size: 'wide' },
  { title: 'Music and choir', caption: 'Voice, rhythm and performance build joyful confidence.', category: 'Arts', image: schoolChoir, size: 'standard' },
  { title: 'Our learning campus', caption: 'Purposeful spaces designed for discovery and belonging.', category: 'Events', image: schoolCampus, size: 'tall' },
  { title: 'Everyday learning', caption: 'Bright classrooms support focused and engaging lessons.', category: 'Classrooms', image: brightClassroom, size: 'small' },
];

const SchoolGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="school-gallery-section" aria-labelledby="school-gallery-title">
      <div className="school-gallery-intro">
        <motion.span
          className="school-gallery-eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          A glimpse of daily life
        </motion.span>

        <motion.h2
          id="school-gallery-title"
          className="school-gallery-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
        >
          Moments around Leerand
        </motion.h2>

        <motion.p
          className="school-gallery-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.16 }}
        >
          From outdoor learning and play to classroom curiosity, friendships,
          sport, and creative expression, these moments offer a brief relay of
          the school day.
        </motion.p>

        <motion.div
          className="school-gallery-filters"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.22 }}
          role="tablist"
          aria-label="Filter school gallery"
        >
          {filters.map((filter) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={activeFilter === filter ? 'school-gallery-filter-active' : ''}
              onClick={() => setActiveFilter(filter)}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className={`school-gallery-grid school-gallery-grid--${activeFilter.toLowerCase()}`}>
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => {
            const number = String(galleryItems.indexOf(item) + 1).padStart(2, '0');

            return (
              <motion.article
                layout
                className={`school-gallery-card school-gallery-card--${item.size}`}
                key={item.title}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                tabIndex={0}
              >
                <img src={item.image} alt={item.title} className="school-gallery-img" />
                <div className="school-gallery-overlay" />
                <span className="school-gallery-number">{number}</span>
                <div className="school-gallery-card-copy">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="school-gallery-bottom-divider" aria-hidden="true" />
    </section>
  );
};

export default SchoolGallery;
