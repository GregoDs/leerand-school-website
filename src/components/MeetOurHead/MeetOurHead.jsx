import React from 'react';
import { motion } from 'framer-motion';
import '../HeadteacherMessage/HeadteacherMessage.css';
import './MeetOurHead.css';
import directorImg from '../../assets/leerand-photos/dir.jpg';

const MeetOurHead = () => (
  <section className="headteacher-message director-message" aria-labelledby="director-message-title">
    <div className="headteacher-message-rule headteacher-message-rule-top" aria-hidden="true" />

    <div className="headteacher-message-inner director-message-inner">
      <motion.div
        className="headteacher-message-content director-message-content"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="headteacher-eyebrow">Meet our Director</span>
        <span className="headteacher-quote-mark" aria-hidden="true">“</span>
        <h2 id="director-message-title">
          The best of both new and old.
        </h2>

        <div className="director-message-copy">
          <p>
            At Leerand, we blend traditional values with a modern, creative
            approach to education. Since 2014, creativity and individual spirit
            have remained at the heart of our culture, inspiring us to think
            openly and continuously challenge ourselves..at kleerand we st
          </p>
        </div>

        <div className="headteacher-signoff">
          <span className="headteacher-signature-line" aria-hidden="true" />
          <div>
            <strong>Francis Kago</strong>
            <span>Director, Leerand Schools</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="headteacher-portrait-column"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="headteacher-portrait-frame">
          <img src={directorImg} alt="Francis Kago, Director of Leerand Schools" />
          <div className="headteacher-portrait-caption">
            <span>School leadership</span>
            <strong>Francis Kago</strong>
          </div>
        </div>

        <p className="headteacher-creed">
          Learn. Innovate.<br />
          Succeed.
        </p>
      </motion.div>
    </div>

    <div className="headteacher-message-rule headteacher-message-rule-bottom" aria-hidden="true" />
  </section>
);

export default MeetOurHead;
