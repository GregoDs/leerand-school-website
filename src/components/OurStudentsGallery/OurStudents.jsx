import React, { useState } from 'react'
import './OurStudents.css'

const studentImages = [
  { src: '/src/assets/OurStudents_img/Prep-VM-Moss-572x572.webp', shape: 'circle', size: 'large', name: 'Moss', message: 'Learning is an adventure!' },
  { src: 'src/assets/OurStudents_img/Prep-VM-Alexa-572x1260.webp', shape: 'rectangle', size: 'tall', name: 'Alexa', message: 'Exploring the world!' },
  { src: 'src/assets/OurStudents_img/Favour-572x572.webp', shape: 'rectangle', size: 'wide', name: 'Favour', message: 'Music brings us together.' },
  { src: 'src/assets/OurStudents_img/Dan-572x1260.webp', shape: 'rectangle', size: 'tall', name: 'Dan', message: 'After desolation, let us rebuild hope.' },
  { src: 'src/assets/OurStudents_img/Prep-VM-Charlie-1196x780.webp', shape: 'rectangle', size: 'wide', name: 'Charlie', message: 'Every day is a new chance.' },
  { src: 'src/assets/OurStudents_img/Cosimo-e1699369656527-572x572.webp', shape: 'circle', size: 'medium', name: 'Cosimo', message: 'Nature inspires me.' },
  { src: 'src/assets/OurStudents_img/Prep-VM-Skyela-572x1260.webp', shape: 'rectangle', size: 'tall', name: 'Skyela', message: 'Dream big, work hard.' },
  { src: 'src/assets/OurStudents_img/Stan-572x572.webp', shape: 'circle', size: 'medium', name: 'Stan', message: 'Ready for the next challenge.' },
  { src: 'src/assets/OurStudents_img/Vision-Maker-Astral-572x1260.webp', shape: 'rectangle', size: 'tall', name: 'Astral', message: 'Vision makes reality.' },
  { src: 'src/assets/OurStudents_img/Xander-e1700568542597-572x572.webp', shape: 'circle', size: 'large', name: 'Xander', message: 'Stay curious.' },
]

const OurStudents = () => {
  const [hoveredStudent, setHoveredStudent] = useState(null)

  return (
    <div className="our-students-container">
      {/* Top vertical divider */}
      <div className="students-points-divider top"></div>

      <div className="image-grid">
        {studentImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.name}
            className={`student-image ${img.shape} ${img.size || ''}`}
            onMouseEnter={() => setHoveredStudent(img)}
            onMouseLeave={() => setHoveredStudent(null)}
          />
        ))}
      </div>

      {/* Hover message */}
      <div className={`hover-message ${hoveredStudent ? 'visible' : ''}`}>
        {hoveredStudent && (
          <>
            <img
              src={hoveredStudent.src}
              alt={hoveredStudent.name}
              className="author-avatar"
            />
            <div>
              <p>{hoveredStudent.message}</p>
              <small>By {hoveredStudent.name}</small>
            </div>
          </>
        )}
      </div>

      {/* Middle vertical divider */}
      <div className="students-points-divider middle"></div>
    </div>
  )
}

export default OurStudents