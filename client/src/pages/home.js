import IkimonoLogo from '../images/IkimonoLogo.PNG'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      {/* 
      id love to have a title screen pop up here with the song taylor made and art by hayden */}

      <img src={IkimonoLogo} alt="ikomono logo" />
      <button onClick={() => navigate('/signin')}>SIGN IN</button>
      <button onClick={() => navigate('/register')}>REGISTER</button>
    </div>
  )
}

export default Home
