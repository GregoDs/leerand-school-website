import React from 'react'
import { motion } from 'framer-motion'

const AnimatedText = ({ text, delay = 0 }) => {
  const words = text.split(' ')
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default AnimatedText