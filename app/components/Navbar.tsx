'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      const scrollY = window.scrollY;
      const threshold = 50;

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      if (scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(scrollY);

      if (navbarRef.current) {
        if (scrollY > 50) {
          navbarRef.current.classList.add('scrolled');
        } else {
          navbarRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`navbar ${isVisible ? 'visible' : 'hidden'}`} 
      ref={navbarRef}
    >
      <div className="navbar-logo">
        <Link href="/">
          <Image src="/vercel.svg" alt="Logo" width={120} height={40} priority />
        </Link>
      </div>

      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a onClick={() => scrollToSection('about')}>About</a></li>
        <li><a onClick={() => scrollToSection('mission')}>Mission</a></li>
        <li><a onClick={() => scrollToSection('events')}>Events</a></li>
      </ul>
    </nav>
  );
}
