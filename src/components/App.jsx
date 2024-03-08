import { useState } from 'react'
import '../style/App.css'
import Namecomp from './Namecomp'
import Aboutcomp from './Aboutcomp'

function App() {

  return (
    <>
    <div className="header">
      <Namecomp />
    </div>
    <div className="main">
      <Aboutcomp/>

    </div>
    </>
  )
}

export default App
