import styles from "../style/Projectcomp-style.module.css";
import epicEats from '../img/epicEats.png';
import portfolio from '../img/portfolio.png';
import ceresDam from '../img/ceresDam.png';
import candyHub from '../img/candyHub.png'

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
                <img className={styles.candyHubImg} src={candyHub} alt="" />
                <div className={styles.candyHubInfo}>
                    <p></p>
                </div>
            {/* </div> */}
        </div>
    </>
  )
}
export default Projectcomp