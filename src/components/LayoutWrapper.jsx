import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const LayoutWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    lenisRef.current = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current,
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div ref={scrollRef} className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default LayoutWrapper;