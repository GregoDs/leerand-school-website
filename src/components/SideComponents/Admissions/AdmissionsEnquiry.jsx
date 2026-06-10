import React, { useEffect, useRef, useState } from 'react';
import './AdmissionsEnquiry.css';

const schoolLevels = [
  { value: '', label: 'Select a school level' },
  { value: 'kindergarten', label: 'Kindergarten' },
  { value: 'primary', label: 'Primary' },
  { value: 'junior-school', label: 'Junior School' },
];

const AdmissionEnquiry = () => {
  const sectionRef = useRef(null);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const schoolRef = useRef(null);
  const messageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    school: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);

            delay += 160;
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionEl = sectionRef.current;

    if (sectionEl) {
      sectionEl
        .querySelectorAll('.animate-on-scroll')
        .forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, school } = formData;

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !school.trim()
    ) {
      setErrorMessage(
        'Please complete all required fields before submitting.'
      );

      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (nextRef?.current) {
        nextRef.current.focus();
      }
    }
  };

  return (
    <section className="enquiry-section" ref={sectionRef}>

      {/* Header */}
      <div className="entry-header enquiry-header">
        <span className="entry-eyebrow">
          Get In Touch
        </span>

        <h2 className="entry-title">
          Admission Enquiry
        </h2>

        <p className="entry-subtitle">
          Give us a call or drop by anytime — we endeavour to answer all enquiries
          <br />
          within 24 hours on business days. We will be happy to answer your questions.
        </p>
      </div>

      {/* Form + Info */}
      <div className="enquiry-body animate-on-scroll">

        {/* LEFT */}
        <aside className="enquiry-info-panel">

          <div className="info-block">
            <span className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>

            <div>
              <span className="info-label">Phone</span>
              <span className="info-value">
                +254 700 000 000
              </span>
            </div>
          </div>

          <div className="info-block">
            <span className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
            </span>

            <div>
              <span className="info-label">Email</span>
              <span className="info-value">
                admissions@leerand.ac.ke
              </span>
            </div>
          </div>

          <div className="info-block">
            <span className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>

            <div>
              <span className="info-label">Location</span>
              <span className="info-value">
                Nairobi, Kenya
              </span>
            </div>
          </div>

          <div className="info-block">
            <span className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </span>

            <div>
              <span className="info-label">Office Hours</span>
              <span className="info-value">
                Mon – Fri, 7:30 AM – 5:00 PM
              </span>
            </div>
          </div>

          <div className="info-accent-bar" />
        </aside>

        {/* RIGHT */}
        <div className="enquiry-form-wrap">

          {submitted ? (
            <div className="enquiry-success">

              <div className="success-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>

              <h3 className="success-title">
                Thank you, {formData.name.split(' ')[0]}!
              </h3>

              <p className="success-msg">
                Your enquiry has been received.
                A member of our admissions team
                will be in touch within 24 hours
                on business days.
              </p>

              <button
                className="enquiry-submit"
                onClick={() => {
                  setSubmitted(false);

                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    school: '',
                    message: '',
                  });

                  setErrorMessage('');
                }}
              >
                Send Another Enquiry
              </button>

            </div>
          ) : (
            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* Error Message */}
              {errorMessage && (
                <div className="form-error-message">
                  {errorMessage}
                </div>
              )}

              {/* Row 1 */}
              <div className="form-row">

                <div className={`form-group ${focused === 'name' || formData.name ? 'active' : ''}`}>
                  <label className="form-label" htmlFor="name">
                    Full Name <span className="required">*</span>
                  </label>

                  <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                    placeholder="e.g. Jane Wanjiku"
                  />

                  <span className="form-line" />
                </div>

                <div className={`form-group ${focused === 'phone' || formData.phone ? 'active' : ''}`}>
                  <label className="form-label" htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>

                  <input
                    ref={phoneRef}
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')}
                    onKeyDown={(e) => handleKeyDown(e, emailRef)}
                    placeholder="+254 700 000 000"
                  />

                  <span className="form-line" />
                </div>

              </div>

              {/* Row 2 */}
              <div className="form-row">

                <div className={`form-group ${focused === 'email' || formData.email ? 'active' : ''}`}>
                  <label className="form-label" htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>

                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    onKeyDown={(e) => handleKeyDown(e, schoolRef)}
                    placeholder="you@example.com"
                  />

                  <span className="form-line" />
                </div>

                <div className={`form-group form-group--select ${focused === 'school' || formData.school ? 'active' : ''}`}>
                  <label className="form-label" htmlFor="school">
                    School Level <span className="required">*</span>
                  </label>

                  <select
                    ref={schoolRef}
                    id="school"
                    name="school"
                    className="form-input form-select"
                    value={formData.school}
                    onChange={handleChange}
                    onFocus={() => setFocused('school')}
                    onBlur={() => setFocused('')}
                    onKeyDown={(e) => handleKeyDown(e, messageRef)}
                  >
                    {schoolLevels.map((lvl) => (
                      <option
                        key={lvl.value}
                        value={lvl.value}
                        disabled={lvl.value === ''}
                      >
                        {lvl.label}
                      </option>
                    ))}
                  </select>

                  <span className="form-line" />

                  <span className="select-chevron">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M1 1L7 7L13 1" stroke="#181c28" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

              </div>

              {/* Message */}
              <div className={`form-group form-group--full ${focused === 'message' || formData.message ? 'active' : ''}`}>
                <label className="form-label" htmlFor="message">
                  Message
                </label>

                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  rows={5}
                  placeholder="Tell us a little about your child and any specific questions you may have…"
                />

                <span className="form-line" />
              </div>

              {/* Footer */}
              <div className="form-footer">

                <span className="form-note">
                  <span className="required">*</span> Required fields
                </span>

                <button
                  type="submit"
                  className="enquiry-submit"
                >
                  Send Enquiry

                  <svg width="18" height="13" viewBox="0 0 20 14" fill="currentColor">
                    <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z"/>
                  </svg>
                </button>

              </div>

            </form>
          )}

        </div>
      </div>

      <div className="enquiry-divider enquiry-divider-bottom" />
    </section>
  );
};

export default AdmissionEnquiry;
