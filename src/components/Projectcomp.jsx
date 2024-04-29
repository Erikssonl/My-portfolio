import styles from "../style/Projectcomp-style.module.css";
import epicEats from '../img/epicEats.png';
import portfolio from '../img/portfolio.png';
import candyHub1 from '../img/candyHub1.png'
import { useRef } from "react";

const Projectcomp = ({infoEe, infoP, infoCh}) => {
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
                    <p>{infoEe}</p>
                    <div className={styles.buttons}>
                        <a href="" target="_blank">
                            <button>Live Demo</button>
                        </a>
                        <a href="https://github.com/Erikssonl/LE-foodApp/tree/main" target='_blank'>
                            <button>Source code</button>
                        </a>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className={styles.portfolio}> */}
                <div className={styles.portfolioInfo}>
                    <p>{infoP}</p>
                    <div className={styles.buttons}>
                        <a href="" target="_blank">
                            <button>Live Demo</button>
                        </a>
                        <a href="https://github.com/Erikssonl/My-portfolio/tree/main" target='_blank'>
                            <button>Source code</button>
                        </a>
                    </div>
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
                src={candyHub1} 
                alt="" 
                ref={candyHubRef}
                onMouseMove={(e) => handleMouseMove(e, candyHubRef)}
                onMouseLeave={() => handleMouseLeave(candyHubRef)}
                />
                <div className={styles.candyHubInfo}>
                    <p>{infoCh}</p>
                    {/* <div className={styles.buttons}>
                        <a href="" target="_blank">
                            <button>Live Demo</button>
                        </a>
                        <a href="" target="_blank">
                            <button>Source code</button>
                        </a>
                    </div> */}
                </div>
            {/* </div> */}
        </div>
    </>
  )
}
export default Projectcomp