import React, { useEffect, useRef } from 'react'
import './LearnMore.css'
import { motion } from 'framer-motion'

// Make sure you're importing these images properly!
import img1 from '../../assets/LearnMore/Sport-cricket-1196x1396-2.webp'
import img2 from '../../assets/LearnMore/Performing-Arts-Phantom.webp'
import img3 from '../../assets/LearnMore/Senior-Boys-Boarding-2.webp'
import img4 from '../../assets/LearnMore/Jasmine-Web-1196x1396.webp'

const cards = [
  {
    img: img1,
    label: 'Sport',
    link: '#sports',
  },
  {
    img: img2,
    label: 'Creative and Performing Arts',
    link: '#',
  },
  {
    img: img3,
    label: 'Boarding and Pastoral Care',
    link: '#',
  },
  {
    img: img4,
    label: "Director's cut",
    link: '#',
  },
]

const LearnMore = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, delay)
            delay += 200
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="learn-more-section" ref={sectionRef}>
      <div className="learn-more-divider-top" />
      <div className="learn-more-title animate-on-scroll" data-animate="fade-up">
        Learn more about our school
      </div>

      <div className="learn-more-grid">
        {cards.map((item, idx) => (
          <div className="learn-more-card animate-on-scroll" data-animate="fade-up" key={item.label}>
            <div className="learn-more-img-wrap">
              <img src={item.img} alt={item.label} className="learn-more-img" />
              <a href={item.link} className="learn-more-label">
                <span>{item.label}</span>
                <motion.span
                  className="mr-4"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{
                    x: [0, 6, 4],
                    transition: {
                      x: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                        duration: 0.4,
                        repeat: 1,
                        repeatType: 'loop',
                        repeatDelay: 0.2,
                      },
                      delay: 0.15,
                    },
                  }}
                  transition={{
                    opacity: { duration: 0.5, ease: 'easeOut' },
                  }}
                >
                  <svg
                    className="w-[20px] h-[14px] text-black group-hover:text-yellow-500 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 14"
                    fill="currentColor"
                  >
                    <path
                      d="M14,0h-2c0,2.39,1.06,4.53,2.73,6H0v2h14.73c-1.67,1.47-2.73,3.61-2.73,6h2c0-3.31,2.69-6,6-6v-2c-3.31,0-6-2.69-6-6Z"
                      data-name="Layer 1"
                    />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="learn-more-divider-bottom" />
    </section>
  )
}

export default LearnMore