import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import aboutImg from '../../assets/ourvalues2.png'; 

const AboutUs = () => {
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
            delay += 200;
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      const targets = sectionEl.querySelectorAll('.animate-on-scroll');
      targets.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-divider about-divider-top" />
      <div className="about-inner">
        {/* LEFT — text content */}
        <div className="about-content-col">
          <div className="about-content">
            <span className="about-eyebrow animate-on-scroll">Who We Are</span>
            <h2 className="about-title animate-on-scroll">
              Shaping Curious,<br />Confident Minds
            </h2>
            <p className="about-body animate-on-scroll">
              Founded in 2014, Leerand School was born from a simple but powerful belief —
              that every child carries within them an extraordinary capacity to learn, create,
              and lead. Nestled in the heart of our community, we have grown into a school
              defined not just by academic excellence, but by warmth, character, and a
              relentless pursuit of potential.
            </p>
            {/* <p className="about-body animate-on-scroll">
              Our approach blends the timeless wisdom of classical education with the
              energy of modern pedagogy. We hold our students to high standards while
              nurturing the individual spirit that makes each one of them uniquely themselves.
              At Leerand, education is never one-size-fits-all — it is purposeful, personal,
              and profoundly human.
            </p> */}
            <div className="about-stats animate-on-scroll">
              <div className="about-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Enrolled</span>
              </div>
              <div className="about-stat-divider" />
              <div className="about-stat">
                <span className="stat-number">60+</span>
                <span className="stat-label">Dedicated Staff</span>
              </div>
            </div>
            <div className="about-btn-row animate-on-scroll">
              <span className="about-learn-label">DISCOVER OUR STORY</span>
              <button className="about-arrow-btn" aria-label="Learn more">
                <span className="about-arrow-circle">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#F5C518" />
                    <path d="M11 16H21" stroke="#181c28" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17.5 12L21 16L17.5 20" stroke="#181c28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="about-img-col">
          <div className="about-img-wrap animate-on-scroll">
            <img
              src={aboutImg}
              alt="Leerand School students"
              className="about-img"
            />
            <div className="about-img-badge">
              <span className="badge-year">Est.</span>
              <span className="badge-num">2014</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-divider about-divider-bottom" /> */}
    </section>
  );
};

export default AboutUs;