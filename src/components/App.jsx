import { useRef, useState } from 'react'
import '../style/App.css'
import Namecomp from './Namecomp'
import Aboutcomp from './Aboutcomp'
import Skillcomp from './Skillcomp';
import Socialcomp from './Socialcomp';
import Projectcomp from './Projectcomp';
import NavbarComp from './NavbarComp';

function App() {

  const skills = ["HTML", "CSS", "React", "JS", "Git", "Github", "Node", "API", "Figma", "Testing", "Cypress"];
  const infoEe = "EpicEats is an individual school project where users can search for food dishes and access recipes with ingredient lists and instructions. The application is built with React.js and utilizes MealDB's open API. I have designed the application's interface myself by starting the designwork in figma and then using CSS style-sheets"
  const infoP = "My portfolio is a personal project where I've built this website using React.js, aiming to serve as a presentation and representation of myself as both a person and a frontend developer. In this project, I've experimented with various design features and animations using CSS. This website will likely remain under constant development as I enjoy exploring new styles and functionalities to enhance my coding skills."
  const infoCh = "CandyHub is a school project. On the frontend, I've used React.js, Tailwind with DaisyUI, and custom-written CSS. For the first time, I've delved into some backend development using NodeJs and have employed MySQL as the database for the project. On this fictitious webshop users can search for products, add products to their shopping cart, and place orders. Users can also register with a username and password and then log in."
  const infoMe = "Hello, I am an Frontend Developer student seeking new and developmental challenges. I am often described as cheerful, positive, and proactive. I embrace new challenges and  I enjoy being creative. I always approach tasks with a positive mindset, aiming to become the best Frontend Developer I can be."
  
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const refs = {
      'home': headerRef,
      'about': aboutRef,
      'projects': projectsRef,
      'contact': contactRef
    };

    const ref = refs[sectionId];
    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <NavbarComp scrollToSection={scrollToSection} />
    <div className="header" ref={headerRef}>
      <Namecomp />
    </div>
    <div className="main" ref={aboutRef}>
      <Aboutcomp infoMe={infoMe}/>
      <Skillcomp skills={skills}/>
    </div>
    <div className='projectComp' ref={projectsRef}>
      <Projectcomp infoEe={infoEe} infoP={infoP} infoCh={infoCh}/>
    </div>
    <footer ref={contactRef}>
      <Socialcomp/>
    </footer>
    </>
  )
}

export default App
