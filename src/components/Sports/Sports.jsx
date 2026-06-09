import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Sports.css';

import sportHero from '../../assets/LearnMore/Sport-cricket-1196x1396-2.webp';
import swimmer from '../../assets/hero_imgs/swimmer.jpg';
import teamSport from '../../assets/sports/feb6a3b98_generated_44aaab04.png';

const sports = ['Football', 'Athletics', 'Netball', 'Cricket', 'Swimming', 'Team Games'];

const principles = [
  {
    number: '01',
    title: 'Skilled Coaching',
    text: 'Purposeful instruction helps every learner build technique, confidence and a lasting enjoyment of movement.',
  },
  {
    number: '02',
    title: 'Team Character',
    text: 'Sport teaches discipline, respect, resilience and the responsibility of representing Leerand well.',
  },
  {
    number: '03',
    title: 'Room to Compete',
    text: 'Regular practice and healthy competition give learners meaningful opportunities to test their progress.',
  },
];

const SportSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );

    sectionRef.current
      ?.querySelectorAll('.sport-reveal')
      .forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sports" className="sport-premium-section" ref={sectionRef}>
      <div className="sport-premium-hero">
        <img src={sportHero} alt="Leerand learner participating in sport" />
        <div className="sport-premium-overlay" />

        <div className="sport-premium-hero-copy sport-reveal">
          <span>Sports at Leerand</span>
          <h2>Play with purpose.<br />Compete with character.</h2>
          <p>
            A premium sports programme that develops confident athletes,
            dependable teammates and resilient young people.
          </p>
        </div>

        <div className="sport-premium-scoreline sport-reveal" aria-label="Sports programme highlights">
          <div><strong>6+</strong><span>Core Sports</span></div>
          <div><strong>All</strong><span>Learning Stages</span></div>
          <div><strong>One</strong><span>Team Culture</span></div>
        </div>
      </div>

      <div className="sport-premium-body">
        <div className="sport-premium-intro sport-reveal">
          <span className="sport-premium-eyebrow">The Leerand Sporting Experience</span>
          <h3>Every learner has a place on the field.</h3>
          <p>
            We introduce strong movement foundations in the early years, build
            technical confidence through Primary, and encourage greater
            independence, leadership and competition in Junior Secondary.
          </p>

          <Link to="/contacts" className="sport-enrol-button">
            Enroll into Sports
          </Link>
        </div>

        <div className="sport-premium-image-pair sport-reveal">
          <div className="sport-premium-image sport-premium-image-main">
            <img src={teamSport} alt="Leerand team sports programme" />
          </div>
          <div className="sport-premium-image sport-premium-image-small">
            <img src={swimmer} alt="Leerand swimming programme" />
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default SportSection;
