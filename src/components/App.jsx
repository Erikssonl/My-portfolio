import { useState } from 'react'
import '../style/App.css'
import Namecomp from './Namecomp'
import Aboutcomp from './Aboutcomp'
import Skillcomp from './Skillcomp';
import Socialcomp from './Socialcomp';
import Projectcomp from './Projectcomp';

function App() {

  const skills = ["HTML", "CSS", "React", "JS", "Github", "Figma"];
  const infoEe = "EpicEats is an individual school project where users can search for food dishes and access recipes with ingredient lists and instructions. The application is built with React.js and utilizes MealDB's open API. I have designed the application's interface myself by starting the designwork in figma and then using CSS style-sheets"
  const infoP = "My portfolio is a personal project where I've built this website using React.js, aiming to serve as a presentation and representation of myself as both a person and a frontend developer. In this project, I've experimented with various design features and animations using CSS. This website will likely remain under constant development as I enjoy exploring new styles and functionalities to enhance my coding skills."
  const infoCh = "This project is a work in progress and will go live shortly"
  const infoMe = "Hello, I am an Frontend Developer student seeking new and developmental challenges. I am often described as cheerful, positive, and proactive. I embrace new challenges and  I enjoy being creative. I always approach tasks with a positive mindset, aiming to become the best Frontend Developer I can be."

  return (
    <>
    <div className="header">
      <Namecomp />
    </div>
    <div className="main">
      <Aboutcomp infoMe={infoMe}/>
      <Skillcomp skills={skills}/>
    </div>
    <div className='projectComp'>
      <Projectcomp infoEe={infoEe} infoP={infoP} infoCh={infoCh}/>
    </div>
    <footer>
      <Socialcomp/>
    </footer>
    </>
  )
}

export default App
