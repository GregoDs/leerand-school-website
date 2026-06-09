import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/leerandlogo.png';
import Hamburger from './Hamburger';
import './Navbar.css';

const desktopLinks = [
  { name: 'HOME', href: '/' },
  { name: 'PROGRAMS', href: '/programs' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'EVENTS', href: '/#events' },
  { name: 'PORTAL', href: '/portal' },
  { name: 'CONTACT', href: '/contacts' },
];

const mobileLinks = [
  { name: 'HOME', href: '/' },
  { name: 'PROGRAMS', href: '/programs' },
  { name: 'ADMISSION', href: '/admissions' },
  { name: 'GALLERY', href: '/gallery' },
];

const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 32 24" fill="none" stroke="currentColor" aria-hidden="true">
    {open ? (
      <path d="M6 21 26 3M6 3l20 18" strokeWidth="1.8" strokeLinecap="round" />
    ) : (
      <>
        <path d="M3 5h26" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 19h26" strokeWidth="1.8" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const nav = navRef.current;
    const scrollContainer = nav?.parentElement;
    const target = scrollContainer || window;

    const handleScroll = () => {
      const scrollTop = target === window ? window.scrollY : target.scrollTop;
      setScrolled(scrollTop > 40);
    };

    handleScroll();
    const routeFrame = requestAnimationFrame(handleScroll);
    target.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(routeFrame);
      target.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const linkClass = (href) => (
    `navbar-link ${pathname === href ? 'navbar-link-active' : ''}`
  );

  return (
    <nav
      ref={navRef}
      className={`navbar ${isHome ? 'navbar-home' : scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
    >
      <div className="navbar-desktop">
        <Link to="/" className="navbar-brand" aria-label="Leerand Schools home">
          <img src={logo} alt="" />
          <span className="navbar-brand-copy">
            <strong>Leerand Schools</strong>
            <small>Learn. Innovate. Succeed.</small>
          </span>
        </Link>

        <span className="navbar-brand-divider" aria-hidden="true" />

        <Link to="/admissions" className={`navbar-journey ${pathname === '/admissions' ? 'navbar-link-active' : ''}`}>
          Admissions
        </Link>

        <div className="navbar-desktop-links">
          {desktopLinks.map((link) => (
            <Link key={link.name} to={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/contacts" className="navbar-join-link">
          Join Us
        </Link>

        <button
          className="navbar-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open school menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div className="navbar-mobile">
        <div className="navbar-mobile-main">
          <Link to="/" className="navbar-brand" aria-label="Leerand Schools home">
            <img src={logo} alt="" />
            <span className="navbar-brand-copy">
              <strong>Leerand Schools</strong>
              <small>Learn. Innovate. Succeed.</small>
            </span>
          </Link>

          <button
            className="navbar-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open school menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div className="navbar-mobile-links">
          {mobileLinks.map((link) => (
            <Link key={link.name} to={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}
          <Link to="/contacts" className="navbar-join-link">Join Us</Link>
        </div>
      </div>

      <Hamburger isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
