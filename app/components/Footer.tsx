'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '@/app/styles/Footer.module.css';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoSection}>
            <Image 
              src="/vercel.svg" 
              alt="Logo" 
              width={180} 
              height={45} 
              className={styles.logo}
              priority
            />
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p className={styles.companyDesc}>
            Platform kompetisi teknik sipil terkemuka yang menghubungkan talenta muda dengan peluang prestasi di tingkat nasional dan internasional.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <div className={styles.contactInfo}>
            <p>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>
                Gedung Teknik Sipil Lt.2, Kampus Universitas Diponegoro, Semarang, 16424
              </span>
            </p>
            <p>
              <FaPhone className={styles.contactIcon} />
              <span>+62 21 1234 5678</span>
            </p>
            <p>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@eventlomba.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <p>&copy; {currentYear} Event Lomba. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}