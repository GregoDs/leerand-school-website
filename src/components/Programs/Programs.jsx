import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Programs.css';

// ── Hero image ────────────────────────────────────────────────────────────────
import programsHero from '../../assets/School-Life-2560x1440.jpg';

// ── Programme images ──────────────────────────────────────────────────────────
import prepSchool   from '../../assets/main_entry_points/Pre-prep-girl-on-slide.webp';
import prePrep      from '../../assets/Gallery/02de53e7a_generated_1929746d.png';
import sixthForm    from '../../assets/main_entry_points/Sixth-Form-A-Level-Students-1196x1396.webp';

// ── Co-curricular gallery images ──────────────────────────────────────────────
import ccSport from '../../assets/LearnMore/Sport-cricket-1196x1396-2.webp';
import ccArts from '../../assets/Gallery/661e29678_generated_d58feee5.png';
import ccMusic from '../../assets/LearnMore/Performing-Arts-Phantom.webp';
import ccDrama from '../../assets/hero_imgs/girls_toy.jpg';
import ccDebate from '../../assets/main_entry_points/science-whiteboard-with-student-writing-1196x1396.webp';
import ccStem from '../../assets/main_entry_points/Sixth-Form-A-Level-Students-1196x1396.webp';
import ccChess from '../../assets/Gallery/51a44fab5_generated_44e87ad7.png';
import ccService from '../../assets/SchoolLife_img/Outdoor-Fun-on-Water.webp';
import FooterContact from '../Footer/FooterContact';
// ─────────────────────────────────────────────────────────────────────────────

const entryPoints = [
  {
    title: 'Kindergarten',
    id: 'kindergarten',
    ages: 'Ages 3–6',
    img: prepSchool,
    link: '#kindergarten',
    theme: 'kindergarten',
    identity: 'Play, wonder and belonging',
    traits: ['Purposeful Play', 'Early Literacy', 'Creative Confidence'],
    focus: 'Play-based exploration, early literacy, numeracy foundations, social skills, and creative expression.',
    outcomes: 'Curious, confident communicators ready for structured learning, with a natural love for discovery.',
  },
  {
    title: 'Primary',
    id: 'primary',
    ages: 'Grades 1–6',
    img: prePrep,
    link: '#primary',
    theme: 'primary',
    identity: 'Strong foundations for growing minds',
    traits: ['Core Skills', 'Curious Inquiry', 'Character'],
    focus: 'Core literacy, numeracy, inquiry-based learning, STEM foundations, creative projects and leadership skills.',
    outcomes: 'Independent, well-rounded learners equipped with the academic and social tools for Junior Secondary.',
  },
  {
    title: 'Junior Secondary',
    id: 'junior-secondary',
    ages: 'Grades 7–9',
    img: sixthForm,
    link: '#junior-secondary',
    theme: 'junior',
    identity: 'Independence, challenge and direction',
    traits: ['Subject Depth', 'Leadership', 'Future Readiness'],
    focus: 'Rigorous subject-specialist teaching, research skills, examination preparation and character development.',
    outcomes: 'Academically strong, morally grounded young people ready to lead in their communities.',
  },
];

// ── Academic Framework pillars ────────────────────────────────────────────────
const frameworkPillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: 'Competency-Based Curriculum',
    desc: 'Learning experiences aligned with Kenya\'s CBC, helping learners build knowledge, skills, values and practical competence.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Foundational Learning',
    desc: 'Strong emphasis on literacy, numeracy, communication and problem-solving from the early years through primary school.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'STEM & Digital Literacy',
    desc: 'Hands-on science, technology and creative inquiry that builds confidence with modern tools and real-world challenges.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'Values & Life Skills',
    desc: 'Character formation, leadership, collaboration and service woven into everyday learning and school life.',
  },
];

// ── Co-curricular activities ──────────────────────────────────────────────────
const coCurricular = [
  { number: '01', title: 'Sports', desc: 'Football, athletics, netball and active team experiences.', link: '/gallery#sports', img: ccSport, size: 'wide' },
  { number: '02', title: 'Visual Arts', desc: 'Creative expression through colour, design and making.', link: '/gallery', img: ccArts, size: 'standard' },
  { number: '03', title: 'Music & Choir', desc: 'Voice, rhythm, instruments and confident performance.', link: '/gallery', img: ccMusic, size: 'tall' },
  { number: '04', title: 'Drama & Theatre', desc: 'Storytelling, stagecraft and school productions.', link: '/gallery', img: ccDrama, size: 'small' },
  { number: '05', title: 'Debate & Oratory', desc: 'Public speaking, listening and thoughtful argument.', link: '/contacts', img: ccDebate, size: 'tall' },
  { number: '06', title: 'Tech & STEM Club', desc: 'Coding, robotics and practical scientific discovery.', link: '/contacts', img: ccStem, size: 'wide' },
  { number: '07', title: 'Chess & Strategy', desc: 'Logic, patience and competitive problem-solving.', link: '/contacts', img: ccChess, size: 'small' },
  { number: '08', title: 'Community Service', desc: 'Leadership through care, outreach and responsibility.', link: '/contacts', img: ccService, size: 'standard' },
];

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
const ProgramsHero = () => (
  <section data-nav-theme="light" className="prog-hero-fullscreen">
    <img src={programsHero} alt="Leerand School Programmes" className="prog-hero-bg" />
    <div className="prog-hero-overlay" />
    <div className="prog-hero-content">
      <motion.h1
        className="prog-hero-heading"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        What we offer
      </motion.h1>
      <motion.div
        className="prog-hero-line"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// ACADEMIC FRAMEWORK SECTION
// ─────────────────────────────────────────────────────────────────────────────
const AcademicFramework = () => (
  <section className="framework-section">
    <div className="framework-header">
      <span className="entry-eyebrow animate-on-scroll">Curriculum</span>
      <h2 className="entry-title animate-on-scroll">Academic Framework</h2>
      <p className="entry-subtitle animate-on-scroll">
        A Kenyan learning pathway designed to build competence,
        confidence, character and curiosity at every stage.
      </p>
    </div>

    <div className="framework-grid">
      {frameworkPillars.map((pillar, idx) => (
        <motion.div
          key={pillar.title}
          className="framework-card animate-on-scroll"
          style={{ '--fw-delay': `${idx * 0.1}s` }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <span className="framework-icon">{pillar.icon}</span>
          <h3 className="framework-title">{pillar.title}</h3>
          <p className="framework-desc">{pillar.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// ALTERNATING PROGRAMME ROW
// ─────────────────────────────────────────────────────────────────────────────
const ProgRow = ({ prog, idx }) => {
  const isEven = idx % 2 === 0;

  return (
    <div
      id={prog.id}
      className={`prog-row prog-row--${prog.theme} ${isEven ? 'prog-row--img-left' : 'prog-row--img-right'}`}
    >
      <motion.div
        className="prog-row-img-col"
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="prog-row-img-wrap">
          <img src={prog.img} alt={prog.title} className="prog-row-img" />
          <span className="prog-row-badge">{prog.ages}</span>
        </div>
      </motion.div>

      <motion.div
        className="prog-row-text-col"
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1], delay: 0.12 }}
        viewport={{ once: false, amount: 0.25 }}
      >
        <span className="prog-row-identity">{prog.identity}</span>
        <h2 className="prog-row-title">{prog.title}</h2>

        <div className="prog-row-traits" aria-label={`${prog.title} highlights`}>
          {prog.traits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>

        <div className="prog-row-block">
          <span className="prog-row-label">Learning Focus</span>
          <p className="prog-row-body">{prog.focus}</p>
        </div>

        <div className="prog-row-block">
          <span className="prog-row-label">Outcomes</span>
          <p className="prog-row-body">{prog.outcomes}</p>
        </div>

        <Link to="/admissions#admissions-hero" className="prog-row-cta">
          Explore {prog.title}
          <svg width="18" height="13" viewBox="0 0 20 14" fill="currentColor">
            <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CO-CURRICULAR SECTION — activity quick links
// ─────────────────────────────────────────────────────────────────────────────
const CoCurricular = () => (
  <section id="co-curricular" className="cocurr-gallery-section">
    <div className="cocurr-gallery-header">
      <div className="cocurr-gallery-copy animate-on-scroll">
        <span className="cocurr-directory-eyebrow">Beyond the Classroom</span>
        <h2>Co-Curricular Activities.</h2>
        <p>
          Co-curricular life at Leerand gives every learner space to move,
          create, perform, lead and contribute. Explore the experiences that
          build confidence and reveal new strengths.
        </p>
      </div>

      <Link to="/contacts" className="cocurr-directory-enquire animate-on-scroll">
          Enquire about Co-Curricular activities
          <svg viewBox="0 0 20 14" fill="currentColor" aria-hidden="true">
            <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" />
          </svg>
      </Link>
    </div>

    <div className="cocurr-gallery-grid" aria-label="Co-curricular activity gallery">
      {coCurricular.map((act, idx) => (
        <motion.div
          key={act.title}
          className={`cocurr-gallery-item cocurr-gallery-item--${act.size} animate-on-scroll`}
          style={{ '--cc-delay': `${(idx % 4) * 0.07}s` }}
        >
          <Link to={act.link}>
            <img src={act.img} alt={act.title} />
            <span className="cocurr-gallery-overlay" />
            <span className="cocurr-gallery-number">{act.number}</span>
            <span className="cocurr-gallery-item-copy">
              <strong>{act.title}</strong>
              <small>{act.desc}</small>
            </span>
            <span className="cocurr-gallery-arrow">
              <svg viewBox="0 0 20 14" fill="currentColor" aria-hidden="true">
                <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

const JourneyCta = () => (
  <section className="journey-cta-section animate-on-scroll">
    <div className="journey-cta-inner">
      <h2 className="journey-cta-title">Ready to Begin the Journey?</h2>
      <p className="journey-cta-copy">
        Download our prospectus or schedule a visit to learn more about Leerand's programs.
      </p>
      <div className="journey-cta-actions">
        <Link to="/contacts" className="journey-cta-button journey-cta-button--primary">
          Schedule a Visit
        </Link>
        <Link to="/admissions" className="journey-cta-button journey-cta-button--secondary">
          Download Prospectus
        </Link>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
const ProgramsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            delay += 100;
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const el = pageRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <main className="prog-page" ref={pageRef}>

      {/* 1. HERO */}
      <ProgramsHero />

      {/* 2. INTRO */}
      <section className="prog-intro">
        <div className="prog-intro-line animate-on-scroll" />
        <div className="entry-header prog-intro-inner">
          <span className="entry-eyebrow animate-on-scroll">Academic Programmes</span>
          <h2 className="entry-title animate-on-scroll">Every Stage.<br />Every Learner.</h2>
          <p className="entry-subtitle animate-on-scroll">
            From a child's very first day in Kindergarten through to the rigour of
            Junior Secondary, Leerand provides a seamlessly progressive academic
            journey — built on curiosity, care and the highest standards of teaching.
          </p>
        </div>
        <div className="prog-intro-line animate-on-scroll" />
      </section>


      {/* 4. ALTERNATING PROGRAMME ROWS */}
      <section className="prog-rows-section">
        {entryPoints.map((prog, idx) => (
          <ProgRow key={prog.title} prog={prog} idx={idx} />
        ))}
      </section>

      {/* 5. CO-CURRICULAR */}
      <CoCurricular />

       {/* 3. ACADEMIC FRAMEWORK */}
       <div className="prog-intro-line animate-on-scroll" />
       <AcademicFramework />

      <JourneyCta />

      <FooterContact />

    </main>
  );
};

export default ProgramsPage;
