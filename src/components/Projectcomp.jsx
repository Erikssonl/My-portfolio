import styles from "../style/Projectcomp-style.module.css";
import epicEats from '../img/epicEats.png';
import portfolio from '../img/portfolio.png';
import ceresDam from '../img/ceresDam.png';

const Projectcomp = () => {
  return (
    <>
        <h2 className={styles.projects}>Projects</h2>
        <div className={styles.projectWrap}>
            {/* <div className="epicEats"> */}
                <img className={styles.epicEatsImg} src={epicEats} alt="" />
                <div className={styles.epicEatsInfo}>
                    <p></p>
                </div>
            {/* </div> */}
            {/* <div className="portfolio"> */}
                <div className={styles.portfolioInfo}>
                    <p></p>
                </div>
                <img className={styles.portfolioImg} src={portfolio} alt="" />
            {/* </div> */}
            {/* <div className="ceresDam"> */}
                <img className={styles.ceresDamImg} src={ceresDam} alt="" />
                <div className={styles.ceresDamInfo}>
                    <p></p>
                </div>
            {/* </div> */}
        </div>
    </>
  )
}
export default Projectcomp