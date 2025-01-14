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
        {/* Logo Section */}
        <div className={styles.footerSection}>
          <div className={styles.logoSection}>
            <Image src="/vercel.svg" alt="Logo" width={200} height={60} className={styles.logo} />
          </div>

        </div>

        {/* Company Info Section */}
        <div className={styles.footerSection}>
          
          <h3>About Us</h3>
          <p className={styles.companyDesc}>
            Platform kompetisi teknik sipil terkemuka yang menghubungkan talenta muda dengan peluang prestasi di tingkat nasional dan internasional.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
        

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <div className={styles.contactInfo}>
            <p>
              <FaMapMarkerAlt className={styles.contactIcon} />
              Gedung Teknik Sipil Lt.2,<br />
              Kampus Universitas Diponegoro,<br />
              Semarang, 16424
            </p>
            <p>
              <FaPhone className={styles.contactIcon} />
              +62 21 1234 5678
            </p>
            <p>
              <FaEnvelope className={styles.contactIcon} />
              info@eventlomba.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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
