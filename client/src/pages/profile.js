import { useNavigate, useParams } from 'react-router-dom'
import { createElement, useEffect, useState } from 'react'
import axios from 'axios'

import MILCONSOLECOM from '../images/MILCONSOLECOM.png'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [gift, setGift] = useState('')

  const hungerh4 = document.getElementById('hungers')
  const sleepyh4 = document.getElementById('sleepies')
  const boredomh4 = document.getElementById('boredoms')
  const ageh4 = document.getElementById('agies')
  const deadh4 = document.getElementById('not-alive')

  let dead = false
  let hunger = 0
  let boredom = 0
  let sleepy = 0
  let age = 0

  let boredomInterval
  let hungerInterval
  let sleepyInterval
  let ageInterval
  let petStatus

  const startIntervals = () => {
    hungerInterval = setInterval(function () {
      hunger++
      hungerh4.innerText = `Hunger: ${hunger}`
    }, 5000)
    boredomInterval = setInterval(function () {
      boredom++
      boredomh4.innerText = `Boredom: ${boredom}`
    }, 6000)
    sleepyInterval = setInterval(function () {
      sleepy++
      sleepyh4.innerText = `Sleepiness: ${sleepy}`
    }, 7500)
    ageInterval = setInterval(function () {
      age++
      ageh4.innerText = `Age: ${age}`
    }, 30000)
  }

  const checkPetStatus = () => {
    petStatus = setInterval(function () {
      if (boredom === 10 || hunger === 10 || sleepy === 10) {
        dead = true
        ageh4.innerText = ''
        sleepyh4.innerText = ''
        boredomh4.innerText = ''
        hungerh4.innerText = ''
        deadh4.innerText = `is DEAD!!!`
        endIntervals()
      }
      if (age === 25) {
        dead = true
        dead = true
        ageh4.innerText = ''
        sleepyh4.innerText = ''
        boredomh4.innerText = ''
        hungerh4.innerText = ''
        deadh4.innerText = `Died at the ripe age of 25. RIP KING!`
        endIntervals()
      }
    }, 2000)
  }

  const endIntervals = () => {
    clearInterval(ageInterval)
    clearInterval(petStatus)
    clearInterval(hungerInterval)
    clearInterval(boredomInterval)
    clearInterval(sleepyInterval)
  }

  const feedPet = () => {
    if (hunger >= 1) {
      hunger--
    }
  }

  const playWithPet = () => {
    if (boredom >= 1) {
      boredom--
    }
  }

  const goToSleep = () => {
    if (sleepy >= 1) {
      sleepy--
    }
  }

  const startGame = () => {
    startIntervals()
    checkPetStatus()
    console.log('start')
  }

  useEffect(() => {
    const getGift = async () => {
      const response = await axios.get('http://localhost:3001/api/gifts')
      setGift(response.data.gift)
    }
    getGift()
  }, [])

  const giftAdd = () => {
    if (gift.buff === 'Knowledge') {
      boredom--
    } else if (gift.buff === 'Snack') {
      hunger--
    } else if (gift.buff == 'Mood') {
      boredom--
    }
  }

  const giftButton = () => {
    let surpriseGift = gift[Math.floor(Math.random() * gift.length)]
    console.log(surpriseGift)
    giftAdd(surpriseGift)
  }

  return user && authenticated ? (
    <div className="prof">
      <h2>Hey, {user.username}! </h2>
      <div className="choose">
        <button onClick={() => navigate(`/choosepet/${id}`)}>
          Choose A Pet
        </button>
      </div>
      <div className="delete">
        <button onClick={() => navigate(`/deletePet/${id}`)}>Delete Pet</button>
      </div>
      <div className="petstatus">
        {user.pets.length && (
          <h3>
            {user.pets[0].name} the {user.pets[0].type}
          </h3>
        )}
        <h4 id="hungers"> </h4>
        <h4 id="sleepies"> </h4>
        <h4 id="boredoms"> </h4>
        <h4 id="agies"> </h4>
        <h4 id="not-alive"> </h4>
      </div>
      <div className="play-game">
        <div className="console">
          <img src={MILCONSOLECOM} alt="console" />
        </div>
        <div className="console-pet">
          {user.pets.length && <img src={user.pets[0].img} alt="pet" />}
        </div>
        <button className="start" onClick={() => startGame()}></button>
        <button className="sleep" onClick={() => goToSleep()}></button>
        <button className="left-button" onClick={() => feedPet()}></button>
        <button className="right-button" onClick={() => playWithPet()}></button>
        <button
          className="surprise-button"
          onClick={() => giftButton()}
        ></button>
        <div className="instructions">
          <h3>Instructions:</h3>
          <h4>Start Button = Green</h4>
          <h4>Sleep Button = Orange</h4>
          <h4>Feed Button = Left Oval</h4>
          <h4>Play Button = Right Oval</h4>
          <h4>Surprise Button = Find it yourself :P</h4>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h3>Uh oh! You need to be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>SIGN IN</button>
    </div>
  )
}

export default Profile
