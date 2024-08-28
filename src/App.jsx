import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Nav-bar/Navbar'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Agents from './Components/Agents/Agents'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Services></Services>
      <Agents></Agents>
    </>
  )
}

export default App
