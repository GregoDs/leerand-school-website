import React from 'react';
import SchoolPortalHero from './SchoolPortalHero.jsx';
import './SchoolPortal.css';
import FooterContact from '../Footer/FooterContact.jsx';

const portalFeatures = [
  {
    label: 'Updates',
    text: 'Follow classroom notices, school news and important reminders without missing the small details.',
  },
  {
    label: 'Learning',
    text: 'Stay close to your child\'s progress, activities and everyday learning moments.',
  },
  {
    label: 'Support',
    text: 'Find useful school resources and keep communication with Leerand simple and direct.',
  },
];

const PortalIntro = () => (
  <section className="portal-intro-section" aria-labelledby="portal-intro-title">
    <div className="portal-intro-line" />

    <div className="portal-intro-inner">
      <div className="portal-intro-copy">
        <span className="portal-intro-eyebrow">For Parents</span>
        <h2 id="portal-intro-title" className="portal-intro-title">
          What SchoolPortal Does
        </h2>
        <p className="portal-intro-text">
          SchoolPortal gives every parent a gentle, simple way to stay connected
          to their child&apos;s day at Leerand. From kindergarten updates to school
          communication, it keeps the important things close and easy to reach.
        </p>

        <a
          className="portal-login-button"
          href="https://leerand.esomakids.com"
          target="_blank"
          rel="noreferrer"
        >
          Login to My School Portal
        </a>
      </div>

      <div className="portal-feature-grid" aria-label="SchoolPortal features">
        {portalFeatures.map((feature) => (
          <article className="portal-feature-card" key={feature.label}>
            <span className="portal-feature-mark" aria-hidden="true">
              {feature.label.slice(0, 1)}
            </span>
            <h3>{feature.label}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

function SchoolPortal() {
  return (
    <main className="school-portal-page">
      <SchoolPortalHero />
      <PortalIntro />
      <FooterContact />
    </main>
  );
}

export default SchoolPortal;
