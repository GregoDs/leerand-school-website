import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1.2,
  ease = "back.out(1.7)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.08
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform, filter",
        opacity: 0,
        yPercent: 300,           // Even more vertical movement
        scaleY: 4,               // More stretch
        scaleX: 0.3,             // More squeeze
        filter: "blur(12px)",    // Stronger blur
        rotate: -30,             // Add rotation for extra effect
        transformOrigin: "50% 0%"
      },
      {
        duration: animationDuration * 1.5,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        filter: "blur(0px)",
        rotate: 0,
        stagger: stagger * 1.5,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2
      ref={containerRef}
      className={`scroll-float ${containerClassName}`}
    >
      <span
        className={`scroll-float-text ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
