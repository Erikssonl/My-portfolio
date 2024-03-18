import styles from "../style/Skillcomp-style.module.css";

const Skillcomp = (props) => {

    const skills = props.skills;
    
  return (
    <>
        <main className={styles.content}>
            <div className={styles.languages}>
                <h2 className={styles.h2}>Languages</h2>
                <p className={styles.p}>Swedish</p>
                <p className={styles.p}>English</p>
            </div>
            <div className={styles.skills}>
                <h2 className={styles.h2}>Skills</h2>
                <div className={styles.skillGroup}>
                    {skills.map((skill, idx) => (
                        <>
                            <p className={styles.p} key={idx}>{skill}</p>
                        </>
                    ))}
                </div>
            </div>

        </main>

    </>
  )
}
export default Skillcomp