'use client';
import '@/app/styles/Hero.css';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-overlay ${isVisible ? 'visible' : ''}`}></div>
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1>
          <span className="highlight">Civil Engineering</span>
          <br />
          Innovation Contest
        </h1>
        <p className="hero-date">9 Desember 2024 – 4 Mei 2025</p>
        <div className="button-group">
          <button className="hero-button primary">Daftar Sekarang</button>
          <button className="hero-button secondary">Pelajari Lebih Lanjut</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Universitas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Tim</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500jt</span>
            <span className="stat-label">Total Hadiah</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}
