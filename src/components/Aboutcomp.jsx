import React, { useEffect, useRef } from 'react';
import me from '../img/me.png'
import styles from "../style/Aboutcomp-style.module.css";
import useScrollPosition from './useScrollPosition';
import circlebig from '../img/circlebig.png'
import circlems from '../img/circlems.png'
import circlesmall from '../img/circlesmall.png'
import circlemedium from '../img/circlemedium.png'

const Aboutcomp = ({infoMe}) => {
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
              <div className={styles.textWrapper}>
                <p className={styles.text} ref={textRef}>{infoMe}</p>
                <a href="/CVLouiseEriksson.pdf" download>
                  <button className={styles.cvBtn}>Download CV</button>
                </a>
              </div>
                <div className={styles.meWrap}>
                  <img className={styles.me} src={me} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Aboutcomp