import React, { useEffect, useRef } from 'react';
import './AdmissionsOverview.css';

const AdmissionsOverview = () => {
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
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="admissions-overview" ref={sectionRef}>

      {/* Top divider */}
      <div className="overview-divider overview-divider-top" />

      {/* Header */}
      <div className="overview-header">
        <span className="overview-eyebrow animate-on-scroll">Join Leerand School</span>
        <h2 className="overview-title animate-on-scroll">Admissions Information</h2>
        <p className="overview-subtitle animate-on-scroll">
          We are delighted that you are considering Leerand School for your child's educational journey.
          <br />
          Below you will find our admission age requirements, interview process details and contact information.
        </p>
      </div>

      {/* Cards grid */}
      <div className="overview-grid">

        {/* Card 1 — Admission Age */}
        <div className="overview-card animate-on-scroll">
          <div className="card-header">
            <span className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            <span className="card-label">Admission Age</span>
          </div>
          <div className="age-list">
            <div className="age-item">
              <div className="age-item-inner">
                <h3 className="age-level">Pre-Primary</h3>
                <p className="age-range">Age 2.6 – 6 years</p>
              </div>
              <span className="age-dot" />
            </div>
            <div className="age-divider" />
            <div className="age-item">
              <div className="age-item-inner">
                <h3 className="age-level">Junior School</h3>
                <p className="age-range">Open Enrolment</p>
              </div>
              <span className="age-dot" />
            </div>
          </div>
        </div>

        {/* Card 2 — Requirements */}
        <div className="overview-card animate-on-scroll">
          <div className="card-header">
            <span className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="9" y1="13" x2="15" y2="13"/>
                <line x1="9" y1="17" x2="13" y2="17"/>
              </svg>
            </span>
            <span className="card-label">Interview Requirements</span>
          </div>
          <ul className="requirements-list">
            <li>
              <span className="req-bullet" />
              Copy of Birth Certificate
            </li>
            <li>
              <span className="req-bullet" />
              Previous school assessment record
            </li>
          </ul>
          <p className="card-note">
            Please bring originals and one copy of each document on the day of the interview.
          </p>
        </div>

        {/* Card 3 — Fees */}
        <div className="overview-card animate-on-scroll">
          <div className="card-header">
            <span className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <path d="M9 12h6M12 16v0"/>
                <path d="M12 6v2M12 16v2"/>
                <path d="M8 10.5s.8-2.5 4-2.5 4 2 4 2-1 2-4 2-4 2-4 2 .8 2.5 4 2.5 4-2.5 4-2.5"/>
              </svg>
            </span>
            <span className="card-label">Interview Fees</span>
          </div>
          <div className="fee-list">
            <div className="fee-item">
              <span className="fee-level">Pre-Primary Section</span>
              <strong className="fee-amount">Ksh 1,500</strong>
            </div>
            <div className="fee-divider" />
            <div className="fee-item">
              <span className="fee-level">Primary Section</span>
              <strong className="fee-amount">Ksh 1,500</strong>
            </div>
            <div className="fee-divider" />
            <div className="fee-item">
              <span className="fee-level">Junior School Section</span>
              <strong className="fee-amount">Ksh 2,500</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom divider */}
      {/* <div className="overview-divider overview-divider-bottom" /> */}

    </section>
  );
};

export default AdmissionsOverview;