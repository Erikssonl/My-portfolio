import circle3 from '../img/circle3.jpg'
import styles from "../style/Socialcomp-style.module.css";

const Socialcomp = () => {
  return (
    <>
        <div className={styles.footer}>
            <div>
                <h2 className={styles.h2}>LETS <br />CONNECT</h2>
            </div>

            <img className={styles.img} src={circle3} alt="" />
        </div>
    </>
  )
}
export default Socialcomp