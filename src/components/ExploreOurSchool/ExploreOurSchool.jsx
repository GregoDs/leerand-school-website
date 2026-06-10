import React, { useEffect, useRef } from 'react';
import './ExploreOurSchool.css';

import purposeImage from '../../assets/leerandwhatwedo.png';

const purposePillars = [
  {
    number: '01',
    label: 'Our Mission',
    title: 'Teach children how to think, not simply what to remember.',
    text: 'We nurture every learner through bold teaching, purposeful innovation and the confidence to question, create and succeed.',
  },
  {
    number: '02',
    label: 'Our Vision',
    title: 'Raise curious, capable and compassionate young people.',
    text: 'We see every child growing into an ethical thinker who can lead with courage, contribute meaningfully and shape a better future.',
  },
];

const reasons = [
  {
    stage: 'Kindergarten',
    title: 'A joyful beginning',
    text: 'Warm classrooms, purposeful play and patient teachers help children feel secure enough to explore.',
    tone: 'gold',
  },
  {
    stage: 'Primary',
    title: 'Strong foundations',
    text: 'Literacy, numeracy, creativity and character grow together through active, thoughtful learning.',
    tone: 'blue',
  },
  {
    stage: 'Junior School',
    title: 'Confident independence',
    text: 'Learners deepen their thinking, discover their strengths and prepare to lead with responsibility.',
    tone: 'coral',
  },
  {
    stage: 'Every Stage',
    title: 'Known and supported',
    text: 'Families and teachers work closely so every child is understood, challenged and encouraged.',
    tone: 'purple',
  },
];

const ExploreOurSchool = () => {
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

    const section = sectionRef.current;
    section?.querySelectorAll('.purpose-reveal').forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="purpose-section" ref={sectionRef}>
      <div className="purpose-divider purpose-divider-top" />

      <div className="purpose-inner">
        <header className="purpose-header purpose-reveal">
          <span className="purpose-eyebrow">Our Purpose</span>
          <h2>Growing Thinkers.<br />Shaping Good Humans.</h2>
          <p>
            From a child&apos;s first curious question in Kindergarten to the confident
            choices they make in Junior School, Leerand exists to make learning
            meaningful, personal and full of possibility.
          </p>
        </header>

        <div className="purpose-story">
          <div className="purpose-image-wrap purpose-reveal">
            <img src={purposeImage} alt="Leerand learners sharing their ideas" />
            <div className="purpose-image-caption">
              <span>We Teach Thinking</span>
              <strong>Every voice matters.</strong>
            </div>
          </div>

          <div className="purpose-pillars">
            {purposePillars.map((pillar) => (
              <article className="purpose-pillar purpose-reveal" key={pillar.label}>
                <div className="purpose-pillar-top">
                  <span className="purpose-pillar-number">{pillar.number}</span>
                  <span className="purpose-pillar-label">{pillar.label}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="purpose-why">
          <div className="purpose-why-heading purpose-reveal">
            <span>Why Families Choose Leerand</span>
            <h3>One caring journey, built for every stage of growing up.</h3>
          </div>

          <div className="purpose-reasons">
            {reasons.map((reason) => (
              <article
                className={`purpose-reason purpose-reason-${reason.tone} purpose-reveal`}
                key={reason.stage}
              >
                <span className="purpose-reason-stage">{reason.stage}</span>
                <span className="purpose-reason-dot" aria-hidden="true" />
                <h4>{reason.title}</h4>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="purpose-divider purpose-divider-bottom" />
    </section>
  );
};

export default ExploreOurSchool;
