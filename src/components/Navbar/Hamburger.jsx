import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/leerandlogo.png';
import './Hamburger.css';

const schoolLinks = [
  { number: '01', label: 'Home', detail: 'Discover Leerand', to: '/' },
  { number: '02', label: 'Admissions', detail: 'Begin your journey', to: '/admissions' },
  { number: '03', label: 'Programs', detail: 'Explore every learning stage', to: '/programs' },
  { number: '04', label: 'Gallery', detail: 'See life at Leerand', to: '/gallery' },
  { number: '05', label: 'Events', detail: 'School calendar and upcoming dates', to: '/#events' },
  { number: '06', label: 'School Portal', detail: 'Parent and learner access', to: '/portal' },
  { number: '06', label: 'Contact', detail: 'Talk to our team', to: '/contacts' },
];

const parentActions = [
  { label: 'Start an admission enquiry', to: '/admissions', external: false },
  { label: 'Arrange a school visit', to: '/contacts', external: false },
  { label: 'Log in to SchoolPortal', to: 'https://leerand.esomakids.com', external: true },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

const ArrowIcon = () => (
  <svg viewBox="0 0 20 14" fill="currentColor" aria-hidden="true">
    <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z" />
  </svg>
);

const Hamburger = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="school-menu"
          initial={{ opacity: 0, y: '-3%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-3%' }}
          transition={{ duration: 0.4, ease: [0.77, 0, 0.18, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="School navigation"
        >
          <header className="school-menu-header">
            <Link to="/" className="school-menu-brand" onClick={onClose}>
              <img src={logo} alt="Leerand Schools" />
              <span>
                <strong>Leerand Schools</strong>
                <small>Learn. Innovate. Succeed.</small>
              </span>
            </Link>

            <button className="school-menu-close" onClick={onClose} aria-label="Close menu">
              <span>Close</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18 18 6M6 6l12 12" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div className="school-menu-body">
            <motion.nav
              className="school-menu-navigation"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              aria-label="Main pages"
            >
              <span className="school-menu-kicker">Explore Leerand</span>
              {schoolLinks.map((item) => (
                <motion.div variants={itemVariants} key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className={`school-menu-link ${pathname === item.to ? 'school-menu-link-active' : ''}`}
                  >
                    <span className="school-menu-link-number">{item.number}</span>
                    <span className="school-menu-link-copy">
                      <strong>{item.label}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <span className="school-menu-link-arrow"><ArrowIcon /></span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.aside
              className="school-menu-aside"
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.48, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="school-menu-welcome">
                <span>For Families</span>
                <h2>A clear next step for every family.</h2>
                <p>
                  Learn about our school, begin an application, arrange a visit,
                  or access the parent portal.
                </p>
              </div>

              <div className="school-menu-actions">
                {parentActions.map((action) => (
                  action.external ? (
                    <a
                      href={action.to}
                      target="_blank"
                      rel="noreferrer"
                      className="school-menu-action"
                      onClick={onClose}
                      key={action.label}
                    >
                      <span>{action.label}</span>
                      <ArrowIcon />
                    </a>
                  ) : (
                    <Link
                      to={action.to}
                      className="school-menu-action"
                      onClick={onClose}
                      key={action.label}
                    >
                      <span>{action.label}</span>
                      <ArrowIcon />
                    </Link>
                  )
                ))}
              </div>

              <div className="school-menu-contact">
                <span>Admissions Office</span>
                <a href="tel:+254700000000">+254 700 000 000</a>
                <a href="mailto:admissions@leerand.ac.ke">admissions@leerand.ac.ke</a>
              </div>
            </motion.aside>
          </div>

          <footer className="school-menu-footer">
            <span>Leerand School, Thika</span>
            <span>We Teach Thinking</span>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hamburger;
