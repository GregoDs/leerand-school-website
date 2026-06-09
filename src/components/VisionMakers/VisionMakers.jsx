import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VisionMakers.css';

gsap.registerPlugin(ScrollTrigger);

const VisionMakers = () => {
  const paraRef = useRef(null);

  // useEffect(() => {
  //   if (paraRef.current) {
  //     gsap.fromTo(
  //       paraRef.current,
  //       { opacity: 0, y: 40 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.2,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: paraRef.current,
  //           start: 'top 80%',
  //           toggleActions: 'play reverse play reverse',
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       paraRef.current,
  //       { clipPath: 'inset(0 100% 0 0)' },
  //       {
  //         clipPath: 'inset(0 0% 0 0)',
  //         duration: 1.4,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: paraRef.current,
  //           start: 'top 80%',
  //           toggleActions: 'play reverse play reverse',
  //         },
  //       }
  //     );
  //   }
  // }, []);

  return (
    <section className="vision-makers-section">
      <div className="vision-makers-divider-top"></div>
      <div className="vision-makers-horizontal-line"></div>
      <div className="vision-makers-inner">
        <div className="vision-makers-header">Our Vision Makers</div>
        <div className="vision-makers-layout">
        <div className="vision-makers-content">
          <p ref={paraRef}>
            Innovative ideas. Extraordinary passion. A world-altering point of view. Meet our Vision Makers. Discover more about their ambitions, aspirations for life beyond education, and how Leerand instilled the self-confidence to make their vision a reality.
          </p>

        <div className="vision-makers-cta-row">
          <span className="vision-makers-cta-label">View all Vision Makers</span>
          <button className="vision-makers-cta-btn" aria-label="View all vision makers">
          <span className="all-posts-arrow-circle">
          <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="21" fill="#F5C518"/>
            <g transform="translate(13, 14)">
              <path d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z"
                    fill="black" />
            </g>
          </svg>
            </span>
          </button>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default VisionMakers;



