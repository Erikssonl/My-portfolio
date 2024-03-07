import circle1 from '../img/circle1.jpg'
import styles from "../style/Namecomp-style.module.css";

const Namecomp = () => {

    const name = "LOUISE ERIKSSON"
    const title = "Frontend Developer"
    
    return ( 
        <div className="nameComp">
            <img className={styles.img} src={circle1} alt="" />
            <div className="Name">
                <h1 className={styles.h1}>{name}</h1>
                <h2 className={styles.h2}>{title}</h2>
            </div>
        </div>
     );
}
 
export default Namecomp;