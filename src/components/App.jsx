import { useState } from 'react'
import '../style/App.css'
import Namecomp from './Namecomp'
import Aboutcomp from './Aboutcomp'
import Skillcomp from './Skillcomp';
import Socialcomp from './Socialcomp';
import Projectcomp from './Projectcomp';

function App() {

  const skills = ["HTML", "CSS", "JS", "Github", "Figma", "React"];

  return (
    <>
    <div className="header">
      <Namecomp />
    </div>
    <div className="main">
      <Aboutcomp/>
      <Skillcomp skills={skills}/>
    </div>
    <div className='projectComp'>
      <Projectcomp />
    </div>
    <footer>
      <Socialcomp/>
    </footer>
    </>
  )
}

export default App
