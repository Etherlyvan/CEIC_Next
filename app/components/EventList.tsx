'use client';
import React, { useState } from 'react';
import styles from '@/app/styles/EventList.module.css';
import '@/app/styles/global.css';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';
import { eventDetails, events } from '@/app/data/eventData'; // Import data

// Define a type for the keys of eventDetails
type EventKey = keyof typeof eventDetails;

const EventList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventKey | null>(null);

  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        fade: true, // Menambahkan efek fade
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        beforeChange: (current: number, next: number) => {
            // Tambahkan class untuk slide yang akan keluar
            const currentSlide = document.querySelector(`.slick-slide[data-index="${current}"]`);
            currentSlide?.classList.add('sliding-out');
    
            // Tambahkan class untuk slide yang akan masuk
            const nextSlide = document.querySelector(`.slick-slide[data-index="${next}"]`);
            nextSlide?.classList.add('sliding-in');
    
            // Hapus class setelah animasi selesai
            setTimeout(() => {
                currentSlide?.classList.remove('sliding-out');
                nextSlide?.classList.remove('sliding-in');
            }, 500);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

  const handleLearnMoreClick = (eventTitle: EventKey) => {
    setSelectedEvent(eventTitle);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedEvent(null);
  };

  return (
    <div className={styles.eventListContainer}>
      <h2>Upcoming Events</h2>
      <p className={styles.subtitle}>Discover our exciting events lineup for 2025</p>
      
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className={styles.slideWrapper}>
            <div className={styles.eventCard}>
              <div className={styles.eventInfo}>
                <span className={styles.eventNumber}>Event {String(index + 1).padStart(2, '0')}</span>
                <h3>{event.title}</h3>
                
                <div className={styles.eventMeta}>
                  {event.date && (
                    <div className={styles.metaItem}>
                      <FaCalendarAlt />
                      <span>{new Date(event.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}</span>
                    </div>
                  )}
                  {event.theme && (
                    <div className={styles.metaItem}>
                      <FaTag />
                      <span>{event.theme}</span>
                    </div>
                  )}
                </div>

                {event.description && (
                  <p className={styles.description}>{event.description}</p>
                )}

                <button 
                  className={styles.detailButton}
                  onClick={() => handleLearnMoreClick(event.title as EventKey)}
                >
                  Learn More <FaArrowRight className={styles.buttonIcon} />
                </button>
              </div>
              <div className={styles.eventImage}>
                <div className={styles.imageOverlay} />
                    <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                        }}
                        priority
                    />
                </div>
            </div>
          </div>
        ))}
      </Slider>

      {showPopup && selectedEvent && (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
            <h3>{selectedEvent}</h3>
            <p><strong>Tema:</strong> {eventDetails[selectedEvent].tema}</p>
            <p><strong>Tentang:</strong> {eventDetails[selectedEvent].tentang}</p>
            {eventDetails[selectedEvent].reward && (
                <div className={styles.rewardSection}>
                <h4>Reward</h4>
                <div className={styles.rewardList}>
                    {eventDetails[selectedEvent].reward.split('\n').map((reward, index) => {
                    const [title, amount] = reward.split(':');
                    return (
                        <div key={index} className={styles.rewardItem}>
                        <span className={styles.rewardTitle}>{title}</span>
                        <span className={styles.rewardAmount}>{amount}</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            )}
            <button onClick={closePopup}>Close</button>
            <a 
                href="https://example.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.registerButton}
            >
                Register Now
            </a>
            </div>
        </div>
        )}
    </div>
  );
};

export default EventList;
