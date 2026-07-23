import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './EntryPoints.css';

import prePrep from '../../assets/leerand-photos/children-speaking.jpg';
import prepSchool from '../../assets/main_entry_points/c0fe77b1b_5843592504643620389.jpg';
import sixthForm from '../../assets/main_entry_points/396d9021a_637579955_1550852830381658_4387154656047404797_n.jpg';


const entryPoints = [
  { title: 'Kindergarten', stage: 'Ages 3–6', img: prepSchool, link: '/programs#kindergarten' },
  { title: 'Primary', stage: 'Grades 1–6', img: prePrep, link: '/programs#primary' },
  { title: 'Junior School', stage: 'Grades 7–9', img: sixthForm, link: '/programs#junior-school' },
];

const ArrowIcon = () => (
  <svg
    className="entry-arrow-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 14"
    fill="currentColor"
  >
    <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" />
  </svg>
);

const EntryPoints = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            delay += 150;
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const sectionEl = sectionRef.current;

    if (sectionEl) {
      sectionEl.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="entry-section" ref={sectionRef}>
      {/* Top divider line */}
      <div className="entry-divider entry-divider-top" />

      {/* Header */}
      <div className="entry-header">
        <span className="entry-eyebrow animate-on-scroll">Find Your Path</span>
        <h2 className="entry-title animate-on-scroll">Academic Levels</h2>
        <p className="entry-subtitle animate-on-scroll">
          Every stage of a child's journey deserves the right environment.
          <br />
          Explore the level that fits your child.
        </p>
      </div>

      {/* Cards */}
      <div className="entry-grid">
        {entryPoints.map((point, i) => (
          <Link
            to={point.link}
            className="entry-card animate-on-scroll"
            key={i}
            tabIndex={0}
            style={{ '--card-delay': `${i * 0.1}s` }}
            aria-label={`Explore ${point.title}`}
          >
            <div className="entry-img-wrap">
              <img src={point.img} alt={point.title} className="entry-img" />
              <div className="entry-img-overlay" />
              <span className="entry-age-badge">{point.stage}</span>
            </div>

            <h3 className="entry-card-title">{point.title}</h3>

            <span className="entry-label-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="entry-divider entry-divider-bottom" />
    </section>
  );
};

export default EntryPoints;
