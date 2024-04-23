import React, { useEffect, useRef } from 'react';
import cat from '../img/cat.jpg'
import styles from "../style/Aboutcomp-style.module.css";
import useScrollPosition from './useScrollPosition';
import circlebig from '../img/circlebig.png'
import circlems from '../img/circlems.png'
import circlesmall from '../img/circlesmall.png'
import circlemedium from '../img/circlemedium.png'

const Aboutcomp = () => {
  const textRef = useRef(null);

  useEffect (()=> {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.slideIn);
          }
        });
      }, 
      {
        threshold: 0.5,
      }
    );
    
    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };

  }, []);

  useScrollPosition();

  return (
    <div className="aboutComp">
        <h2 className={styles.aboutMe}>About me</h2>

        <div className={styles.groupSection}>
            <div>
              <img className={`${styles.circle2} ${styles.aCircleBig1}`} src={circlebig} alt="" />
              <img className={`${styles.circle2} ${styles.aCirclMs1}`} src={circlems} alt="" />
              <img className={`${styles.circle2} ${styles.aCircleSmall1}`} src={circlesmall} alt="" />
              <img className={`${styles.circle2} ${styles.aCircleMedium1}`} src={circlemedium} alt="" />
              <img className={`${styles.circle2} ${styles.aCircleBig2}`} src={circlebig} alt="" />
            </div>
            <div className={styles.aboutSection}>
                <img className={styles.me} src={cat} alt="" />
                <p className={styles.text} ref={textRef}>Hello, I am an Frontend Developer student seeking new and developmental challenges. I am often described as cheerful, positive, and proactive. I embrace new challenges and  I enjoy being creative. I always approach tasks with a positive mindset, aiming to become the best Frontend Developer I can be.</p>
            </div>
        </div>
    </div>
  )
}
export default Aboutcomp