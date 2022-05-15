import { useNavigate, useParams } from 'react-router-dom'

import MILCONSOLECOM from '../images/MILCONSOLECOM.png'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  let dead = false
  let hunger = 0
  let boredom = 0
  let sleepy = 0
  let pottymeter = 0
  let age = 0

  let boredomInterval
  let hungerInterval
  let sleepyInterval
  let ageInterval
  let petStatus

  const startIntervals = () => {
    hungerInterval = setInterval(function () {
      hunger++
    }, 5000)
    boredomInterval = setInterval(function () {
      boredom++
    }, 3000)
    sleepyInterval = setInterval(function () {
      sleepy++
    }, 6500)
    ageInterval = setInterval(function () {
      age++
    }, 20000)
  }

  const checkPetStatus = () => {
    petStatus = setInterval(function () {
      if (boredom === 10 || hunger === 10 || sleepiness === 10) {
        dead = true
        endIntervals()
      }
      if (age === 25) {
        dead = true
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
    if (hunger > 1) {
      hunger--
    }
  }

  const playWithPet = () => {
    if (boredom > 1) {
      boredom--
    }
  }

  const goPotty = () => {
    if (pottymeter > 1) {
      pottymeter--
    }
  }

  const killPet = () => {
    alert(message, 'Your pet has died')
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
        <button>Delete Pet</button>
      </div>
      <div className="pet-feed">{/* this is where feed will live */}</div>
      <div className="play-game">
        <div className="console">
          <img src={MILCONSOLECOM} alt="console" />
        </div>
        <div className="console-pet">
          <img src={user.pets[0].img} alt="pet" />
        </div>
        <div className="left-button" onClick={feedPet()}></div>
        <div className="right-button" onClick={playWithPet()}></div>
        <div className="surprise-button"></div>
        <h3>
          You're taking care of {user.pets[0].name} the {user.pets[0].type}
        </h3>
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
