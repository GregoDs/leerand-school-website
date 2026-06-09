import React from 'react';
import './OurIdentity.css';
import identityimg1 from '../../assets/leerandwhoweare.png';

const OurIdentity = () => {
  return (
    <section className="our-identity" id="identity">
      <h2 className="identity-section-title">Our Identity</h2>
      <div className="identity-container">
        <div className="identity-image">
          <img src={identityimg1} alt="Leerand School Identity" />
        </div>
        <div className="identity-content">
          <h3 className="subsection-title">WHO WE ARE</h3>
          <p>
            <span className="highlight-orange">Leerand School</span> is the school for 
            <span className="highlight-orange"> young, ambitious</span>, and 
            <span className="highlight-orange"> visionary learners </span>
            <strong>(Grades 1-9)</strong>. We believe in teaching how to think — not just knowledge.
          </p>
          <p>
            Rooted in <span className="highlight-orange">dedication</span> and 
            <span className="highlight-orange"> excellence</span>, we empower our learners to 
            innovate with purpose, lead with integrity, and shape a 
            <span className="highlight-blue"> safer, more meaningful future</span> for Kenya and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;