import { useEffect, useState } from "react";
import styles from "../style/NavbarComp-style.module.css";

const NavbarComp = ({ scrollToSection }) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <li onClick={()=> scrollToSection('home')}>Home</li>
            <li onClick={()=> scrollToSection('about')}>About</li>
            <li onClick={()=> scrollToSection('projects')}>Projects</li>
            <li onClick={()=> scrollToSection('contact')}>Contact</li>
        </nav>
    </div>
  )
}
export default NavbarComp