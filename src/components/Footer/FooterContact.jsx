import React from 'react';
import { Link } from 'react-router-dom';
import './FooterContact.css';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'School Gallery', to: '/gallery' },
  { label: 'Upcoming Events', to: '/#events' },
  { label: 'School Portal', to: '/portal' },
];

const programmeLinks = [
  { label: 'Kindergarten', to: '/programs#kindergarten' },
  { label: 'Primary', to: '/programs#primary' },
  { label: 'Junior Secondary', to: '/programs#junior-secondary' },
  { label: 'Co-Curricular Activities', to: '/programs#co-curricular' },
  { label: 'Sports at Leerand', to: '/gallery#sports' },
];

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/233314740373983',
    icon: <path d="M14 8.25h2.25V5.1c-.39-.05-1.73-.1-3.31-.1-3.28 0-5.53 2-5.53 5.69v3.18H3.7v3.52h3.71V26h4.55v-8.61h3.8l.6-3.52h-4.4v-2.83c0-1.02.28-1.71 1.74-1.71H16V8.25h-2Z" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/explore/search/keyword/?q=leerand%20school',
    icon: (
      <>
        <rect x="5" y="5" width="22" height="22" rx="6" />
        <circle cx="16" cy="16" r="5.2" />
        <circle cx="23.5" cy="8.7" r="1.2" className="social-icon-fill" />
      </>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/results?search_query=Leerand+School+Thika',
    icon: (
      <>
        <path d="M27.3 10.1a3.7 3.7 0 0 0-2.6-2.6C22.4 6.9 16 6.9 16 6.9s-6.4 0-8.7.6a3.7 3.7 0 0 0-2.6 2.6A38 38 0 0 0 4.1 16a38 38 0 0 0 .6 5.9 3.7 3.7 0 0 0 2.6 2.6c2.3.6 8.7.6 8.7.6s6.4 0 8.7-.6a3.7 3.7 0 0 0 2.6-2.6 38 38 0 0 0 .6-5.9 38 38 0 0 0-.6-5.9Z" className="social-icon-fill" />
        <path d="m13.2 20.2 7-4.2-7-4.2v8.4Z" className="social-icon-cutout" />
      </>
    ),
  },
];

const FooterContact = () => (
  <footer className="leerand-footer">
    <div className="footer-inner">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-brand-kicker">Leerand Schools</span>
          <h2>Learning with purpose.<br />Growing with confidence.</h2>
          <p>
            A caring learning community in Thika, supporting every child from
            Kindergarten through Junior Secondary.
          </p>
          <Link to="/admissions" className="footer-admissions-link">
            Begin your journey
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <nav className="footer-column" aria-label="Footer quick links">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => <Link to={link.to} key={link.label}>{link.label}</Link>)}
        </nav>

        <nav className="footer-column" aria-label="Footer programme links">
          <h3>Programmes</h3>
          {programmeLinks.map((link) => <Link to={link.to} key={link.label}>{link.label}</Link>)}
        </nav>

        <div className="footer-column footer-reach">
          <h3>Reach Us</h3>
          <a href="tel:+254718307756">0718 307 756</a>
          <a href="mailto:admissions@leerand.ac.ke">admissions@leerand.ac.ke</a>
          <a href="mailto:info@leerand.ac.ke">info@leerand.ac.ke</a>
          <Link to="/contacts">Thika Valley, Thika, Kenya</Link>
          <span>Monday - Friday, 7:00 AM - 4:45 PM</span>
        </div>
      </div>

      <div className="footer-social-row">
        <div>
          <span>Follow Leerand</span>
          <p>School life, notices and moments from our community.</p>
        </div>
        <div className="footer-socials">
          {socials.map((social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit Leerand on ${social.label}`}
              title={social.label}
              key={social.label}
            >
              <svg viewBox="0 0 32 32" aria-hidden="true">{social.icon}</svg>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Leerand Schools. All rights reserved.</span>
        <span>Learn. Innovate. Succeed.</span>
      </div>
    </div>
  </footer>
);

export default FooterContact;
