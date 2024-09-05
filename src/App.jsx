import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Nav-bar/Navbar'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Agents from './Components/Agents/Agents'
import Features from './Components/Features/Features'
import Customers from './Components/Customers/Customers'
import Properties from './Components/Properties/Properties'
import Facilities from './Components/Facilities/Facilities'
import Feed from './Components/Feed/Feed'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Services></Services>
      <Agents></Agents>
      <Features></Features>
      <Customers></Customers>
      <Properties></Properties>
      <Facilities></Facilities>
      <Feed></Feed>
    </>
  )
}

export default App
