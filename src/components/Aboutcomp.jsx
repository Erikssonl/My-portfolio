import cat from '../img/cat.jpg'
import circle2 from '../img/circle2.jpg'
import styles from "../style/Aboutcomp-style.module.css";
import Skillcomp from './Skillcomp';

const Aboutcomp = () => {
  return (
    <div className="aboutComp">
        <h2 className={styles.aboutMe}>About me</h2>

        <div className={styles.groupSection}>
            <img className={styles.img} src={circle2} alt="" /> 
            <div className={styles.aboutSection}>
                <img className={styles.me} src={cat} alt="" />
                <p className={styles.text}>Hello, I am an Frontend Developer student seeking new and developmental challenges. I am often described as cheerful, positive, and proactive. I embrace new challenges and  I enjoy being creative. I always approach tasks with a positive mindset, aiming to become the best Frontend Developer I can be.</p>
            </div>
        </div>


    </div>
  )
}
export default Aboutcomp