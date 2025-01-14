import React from 'react';
import styles from '@/app/styles/Mission.module.css';
import Image from 'next/image';

export default function Mission() {
  const missions = [
    {
      text: "Menumbuhkan dan mengembangkan jiwa riset di kalangan mahasiswa perguruan tinggi se-Indonesia, sejalan dengan visi misi Universitas Diponegoro sebagai Universitas Riset di tahun 2025.",
      image: "/vercel.svg"
    },
    {
      text: "Memperkenalkan Universitas Diponegoro pada umumnya dan Teknik Sipil pada khususnya sebagai lembaga pendidikan berbasis riset dan inovasi.",
      image: "/vercel.svg"
    },
    {
      text: "Memberikan solusi dalam menghadapi permasalahan di masyarakat melalui ide dan inovasi kreatif berkaitan dengan Pembangunan berkelanjutan.",
      image: "/vercel.svg"
    },
    {
      text: "Mempersiapkan calon-calon insinyur sipil dalam menghadapi era digitalisasi konstruksi yang akan menggunakan teknologi terbaru.",
      image: "/vercel.svg"
    },
    {
      text: "Merancang dan mendesain bangunan sipil yang berwawasan lingkungan dan sosial guna membantu memberikan solusi dari masalah yang ditemukan masyarakat.",
      image: "/vercel.svg"
    }
  ];

  return (
    <div className={styles.missionContainer}>
      <h1>Mission of CEIC</h1>
      <p>Tujuan dilaksanakannya kegiatan ini adalah sebagai berikut:</p>
      
      <div className={styles.missionList}>
        {missions.map((mission, index) => (
          <div key={index} className={styles.missionItem}>
            <div className={styles.missionContent}>
              <div className={index % 2 === 0 ? styles.leftContent : styles.rightContent}>
                <Image 
                  src={mission.image}
                  alt={`Mission ${index + 1}`}
                  width={80}
                  height={80}
                  className={styles.missionImage}
                />
              </div>
              <p>{mission.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
