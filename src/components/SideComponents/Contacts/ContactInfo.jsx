import React, { useEffect, useRef, useState } from 'react';
import './ContactInfo.css';

const schoolLevels = [
  { value: '', label: 'Select a school level' },
  { value: 'kindergarten', label: 'Kindergarten' },
  { value: 'primary', label: 'Primary' },
  { value: 'junior-secondary', label: 'Junior Secondary' },
];

const contactCards = [
  {
    label: 'Phone',
    lines: [
      { title: 'Kindergarten', value: '0722 429 165', href: 'tel:+254722429165' },
      { title: 'Primary', value: '0718 307 756', href: 'tel:+254718307756' },
      { title: 'Junior Secondary', value: '0793 591 287', href: 'tel:+254793591287' },
    ],
  },
  {
    label: 'Email',
    lines: [
      { title: 'Admissions', value: 'admissions@leerand.ac.ke', href: 'mailto:admissions@leerand.ac.ke' },
      { title: 'General', value: 'info@leerand.ac.ke', href: 'mailto:info@leerand.ac.ke' },
    ],
  },
  {
    label: 'Office Hours',
    lines: [
      { title: 'Monday - Friday', value: '7:00 am - 4:45 pm' },
      { title: 'Saturday - Sunday', value: 'Closed' },
    ],
  },
];

const ContactInfo = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            delay += 120;
          }
        });
      },
      { threshold: 0.08 }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll').forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-inner">
        <div className="contact-intro animate-on-scroll">
          <span className="contact-eyebrow">Get in touch</span>
          <h2 className="contact-title">We would be happy to answer your questions.</h2>
          <p className="contact-copy">
            Whether you are planning a visit, asking about admissions, or looking
            for the right department, send us a message and the team will get
            back to you as soon as possible.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Leerand-School-Thika"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-address"
          >
            <span>Visit us</span>
            Leerand School, P.O. BOX 6615-00100, Thika, Kenya
          </a>
        </div>

        <div className="contact-card-grid">
          {contactCards.map((card) => (
            <article className="contact-card animate-on-scroll" key={card.label}>
              <h3>{card.label}</h3>
              <div className="contact-card-lines">
                {card.lines.map((line) => {
                  const content = (
                    <>
                      <span>{line.title}</span>
                      <strong>{line.value}</strong>
                    </>
                  );

                  return line.href ? (
                    <a href={line.href} key={`${card.label}-${line.title}`}>
                      {content}
                    </a>
                  ) : (
                    <div key={`${card.label}-${line.title}`}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="contact-form-panel animate-on-scroll">
          <span className="contact-form-eyebrow">General enquiries</span>
          <h3>Send us a message</h3>

          {submitted ? (
            <div className="contact-success">
              <h4>Thank you, {formData.name.split(' ')[0] || 'there'}.</h4>
              <p>We have received your enquiry and will follow up shortly.</p>
              <button
                className="contact-submit"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    school: '',
                    message: '',
                  });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-row">
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <select name="school" value={formData.school} onChange={handleChange}>
                  {schoolLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="contact-map-section animate-on-scroll">
        <div className="contact-map-copy">
          <span>Find us</span>
          <h3>Leerand School, Thika</h3>
        </div>
        <iframe
          title="Leerand School location map"
          src="https://www.google.com/maps?q=Leerand%20School%20Thika&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactInfo;
