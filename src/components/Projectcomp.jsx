import styles from "../style/Projectcomp-style.module.css";
import epicEats from '../img/epicEats.png';
import portfolio from '../img/portfolio.png';
import candyHub from '../img/candyHub.png'
import { useRef } from "react";

const Projectcomp = () => {
    const epicEatsRef = useRef(null);
    const portfolioRef = useRef(null);
    const candyHubRef = useRef(null);

    const handleMouseMove = (e, ref) => {
        const img = ref.current;
        const boundingRect = img.getBoundingClientRect();

        const offsetX = e.clientX - boundingRect.left - boundingRect.width / 2;
        const offsetY = e.clientY - boundingRect.top - boundingRect.height / 2;
        const tiltX = offsetX / boundingRect.width * 20;
        const tiltY = offsetY / boundingRect.height * 20;

        img.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
    };

    const handleMouseLeave = (ref) => {
        const img = ref.current;
        img.style.transform = 'none';
    }

  return (
    <>
        <h2 className={styles.projects}>Projects</h2>
        <div className={styles.projectWrap}>
            {/* <div className={styles.epicEats}> */}
                <img 
                className={styles.epicEatsImg} 
                src={epicEats} 
                alt="" 
                ref={epicEatsRef}
                onMouseMove={(e) => handleMouseMove(e, epicEatsRef)}
                onMouseLeave={() => handleMouseLeave(epicEatsRef)}
                />
                <div className={styles.epicEatsInfo}>
                    <p></p>
                </div>
            {/* </div> */}
            {/* <div className={styles.portfolio}> */}
                <div className={styles.portfolioInfo}>
                    <p></p>
                </div>
                <img 
                className={styles.portfolioImg} 
                src={portfolio} 
                alt="" 
                ref={portfolioRef}
                onMouseMove={(e) => handleMouseMove(e, portfolioRef)}
                onMouseLeave={() => handleMouseLeave(portfolioRef)}
                />
            {/* </div> */}
            {/* <div className={styles.candyHub}> */}
                <img 
                className={styles.candyHubImg} 
                src={candyHub} 
                alt="" 
                ref={candyHubRef}
                onMouseMove={(e) => handleMouseMove(e, candyHubRef)}
                onMouseLeave={() => handleMouseLeave(candyHubRef)}
                />
                <div className={styles.candyHubInfo}>
                    <p></p>
                </div>
            {/* </div> */}
        </div>
    </>
  )
}
export default Projectcomp