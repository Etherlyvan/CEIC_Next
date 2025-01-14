// app/components/About.tsx
import Image from 'next/image';
import styles from '@/app/styles/About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.leftSection}>
        <div className={styles.titleWrapper}>
          <h1>CEIC</h1>
          <h2>2025</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.logos}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/vercel.svg" 
              alt="CEIC Logo" 
              width={100} 
              height={100}
              className={styles.logo} 
            />
            <span>CEIC</span>
          </div>
          <div className={styles.logoWrapper}>
            <Image 
              src="/next.svg" 
              alt="UNDIP Logo" 
              width={100} 
              height={100}
              className={styles.logo} 
            />
            <span>UNDIP</span>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.contentCard}>
          <h3>Civil Engineering Innovation Contest</h3>
          
          <div className={styles.highlightBox}>
            <h4>HMS UNDIP 2024</h4>
            <p className={styles.tagline}>Meningkatkan Inovasi dan Kreativitas Mahasiswa Teknik Sipil</p>
          </div>

          <p className={styles.description}>
            Civil Engineering Innovation Contest (CEIC) adalah perlombaan ketekniksipilan tahunan yang diselenggarakan oleh mahasiswa S1 Teknik Sipil UNDIP dibawah naungan HMS UNDIP 2024.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎯</span>
              <span>Kompetisi Inovatif</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎓</span>
              <span>Seminar Inspiratif</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🌟</span>
              <span>Pengembangan Wawasan</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🌍</span>
              <span>Berdaya Saing Internasional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
