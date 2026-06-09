import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import EntryPoints from './components/EntryPoints/EntryPoints';
import MeetOurHead from './components/MeetOurHead/MeetOurHead';
import ExploreOurSchool from './components/ExploreOurSchool/ExploreOurSchool';
import HeadteacherMessage from './components/HeadteacherMessage/HeadteacherMessage.jsx';
import ScrollingNews from './components/Blogs/ScrollingNews.jsx';
import VisionMakers from './components/VisionMakers/VisionMakers.jsx';
import AnimatedComments from './components/AlumniComments/AnimatedComments.jsx';
import UpcomingEvents from './components/Events/UpcomingEvents.jsx';
import FooterContact from './components/Footer/FooterContact.jsx';
import Admissions from './components/SideComponents/Admissions/Admissions.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contacts from './components/SideComponents/Contacts/Contacts.jsx';
import SportSection from './components/Sports/Sports.jsx';
import ProgramsPage from './components/Programs/Programs.jsx';
import SchoolLife from './components/SchoolLife/SchoolLife.jsx';
import SchoolPortal from './components/SchoolPortal/SchoolPortal.jsx';
import OurPurpose from './components/OurPurpose/OurPurpose.jsx';

const ScrollToTop = ({ scrollRef, lenisRef }) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const lenis = lenisRef.current;

    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        scrollContainer?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const scrollToHash = () => {
      const target = document.getElementById(hash.slice(1));
      if (!scrollContainer || !target) return false;

      if (lenis) {
        lenis.resize();
        lenis.scrollTo(target, { offset: -112, immediate: true });
        return true;
      }

      target.scrollIntoView({ block: 'start', behavior: 'auto' });
      return true;
    };

    const timeouts = [0, 100, 300, 700, 1400].map((delay) => (
      window.setTimeout(() => {
        window.requestAnimationFrame(scrollToHash);
      }, delay)
    ));

    return () => timeouts.forEach((timeout) => window.clearTimeout(timeout));
  }, [pathname, hash, key, scrollRef, lenisRef]);

  return null;
};

function App() {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    lenisRef.current = new Lenis({
      wrapper: scrollRef.current,
      content: contentRef.current,
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    let rafId;

    const raf = (time) => {
      lenisRef.current?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        ref={scrollRef}
        className="site-scroll-container min-h-screen bg-gray-100"
      >
        <ScrollToTop scrollRef={scrollRef} lenisRef={lenisRef} />
        <Navbar />
        <div ref={contentRef} className="site-scroll-content">
          <Routes>
            {/* Homepage Route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutUs />
                  <EntryPoints />
                  <MeetOurHead />
                  <ExploreOurSchool />
                  <HeadteacherMessage />
                  {/* <SportSection /> */}
                  <ScrollingNews />
                  <AnimatedComments />
                  <UpcomingEvents />
                  <FooterContact />
                </>
              }
            />

            {/* Admissions Page Route */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/gallery" element={<SchoolLife />} />
            <Route path="/portal" element={<SchoolPortal />} />

            

      
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
