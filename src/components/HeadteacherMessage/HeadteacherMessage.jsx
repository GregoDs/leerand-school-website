import React from 'react';
import { motion } from 'framer-motion';
import './HeadteacherMessage.css';
import headteacher from '../../assets/headteacher.jpeg';

const HeadteacherMessage = () => (
  <section className="headteacher-message" aria-labelledby="headteacher-message-title">
    <div className="headteacher-message-rule headteacher-message-rule-top" aria-hidden="true" />

    <div className="headteacher-message-inner">
      <motion.div
        className="headteacher-portrait-column"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="headteacher-portrait-frame">
          <img src={headteacher} alt="Leerand Schools headteacher speaking" />
          <div className="headteacher-portrait-caption">
            <span>From the Headteacher</span>
            <strong>Leading with purpose</strong>
          </div>
        </div>

        <p className="headteacher-creed">
          Learn with courage.<br />
          Lead with character.
        </p>
      </motion.div>

      <motion.div
        className="headteacher-message-content"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="headteacher-eyebrow">A message from our Headteacher</span>
        <span className="headteacher-quote-mark" aria-hidden="true">“</span>
        <h2 id="headteacher-message-title">
          Every child should leave school knowing that their ideas matter and
          their future is full of possibility.
        </h2>

        <div className="headteacher-message-copy">
          <p>
            At Leerand, education is more than achievement in the classroom. It
            is the steady work of building confidence, curiosity, discipline
            and kindness in every learner entrusted to us.
          </p>
          <p>
            From a child&apos;s first discoveries in Kindergarten to the growing
            independence of Junior School, we create a school experience
            where pupils feel known, challenged and inspired to contribute with
            purpose. Our promise is simple: every learner will be encouraged to
            aim high, think deeply and become a person of strong character.
          </p>
        </div>

        <div className="headteacher-signoff">
          <span className="headteacher-signature-line" aria-hidden="true" />
          <div>
            <strong>Tr Monica.</strong>
            <span>Leerand Schools</span>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="headteacher-message-rule headteacher-message-rule-bottom" aria-hidden="true" />
  </section>
);

export default HeadteacherMessage;
