import IkimonoLogo from '../images/IkimonoLogo.PNG'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import MILCONSOLECOM from '../images/MILCONSOLECOM.png'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      {/* 
      id love to have a title screen pop up here with the song taylor made and art by hayden */}
      <h1>IKIMONO</h1>
      <div id="console-home">
        <img src={MILCONSOLECOM} alt="kitsune" />
      </div>
      <div className="home-buttons">
        <button onClick={() => navigate('/signin')}>SIGN IN</button>
        <button onClick={() => navigate('/register')}>REGISTER</button>
      </div>
    </div>
  )
}

export default Home
