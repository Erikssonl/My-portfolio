import React from 'react';
import styles from "../style/Namecomp-style.module.css";
import useScrollPosition from './useScrollPosition';
import circlebig from '../img/circlebig.png'
import circlems from '../img/circlems.png'
import circlesmall from '../img/circlesmall.png'
import circlemedium from '../img/circlemedium.png'

const Namecomp = () => {

    const name = "LOUISE ERIKSSON"
    const title = "Frontend Developer"

    useScrollPosition();
    
    return ( 
        <div className="nameComp">
                <img className={`${styles.circle} ${styles.circleBig1}`} src={circlebig} alt="" />
                <img className={`${styles.circle} ${styles.circleMs1}`} src={circlems} alt="" />
                <img className={`${styles.circle} ${styles.circleSmall1}`} src={circlesmall} alt="" />
                <img className={`${styles.circle} ${styles.circleMedium1}`} src={circlemedium} alt="" />
                <img className={`${styles.circle} ${styles.circleBig2}`} src={circlebig} alt="" />
                <img className={`${styles.circle} ${styles.circleMedium2}`} src={circlemedium} alt="" />
                <img className={`${styles.circle} ${styles.circleMs2}`} src={circlems} alt="" />
                <img className={`${styles.circle} ${styles.circleSmall2}`} src={circlesmall} alt="" />
                <img className={`${styles.circle} ${styles.circleSmall3}`} src={circlesmall} alt="" />
                <img className={`${styles.circle} ${styles.circleSmall4}`} src={circlesmall} alt="" />
                <img className={`${styles.circle} ${styles.circleMedium3}`} src={circlemedium} alt="" />
                <img className={`${styles.circle} ${styles.circleMs3}`} src={circlems} alt="" />
                <div className={styles.textContainer}>
                    <h1 className={styles.h1}>{name}</h1>
                    <h2 className={styles.h2}>{title}</h2>
                </div>
        </div>
     );
}
 
export default Namecomp;