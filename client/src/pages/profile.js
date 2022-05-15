import { useNavigate, useParams } from 'react-router-dom'

import MILCONSOLECOM from '../images/MILCONSOLECOM.png'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const { id } = useParams()

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
      if (boredom === 10 || hunger === 10 || sleepy === 10) {
        dead = true
        endIntervals()
      }
      if (age === 25) {
        dead = true
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
    if (hunger > 1) {
      hunger--
    }
  }

  const playWithPet = () => {
    if (boredom > 1) {
      boredom--
    }
  }

  const goToSleep = () => {
    if (sleepy > 1) {
      sleepy--
    }
  }

  const killPet = () => {}

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
      <div className="petstatus">
        <h3>
          {user.pets[0].name} the {user.pets[0].type}
        </h3>
        <h4>Hunger: {hunger}</h4>
        <h4>Sleepiness: {sleepy}</h4>
        <h4>Boredom: {boredom}</h4>
        <h4>Age: {age}</h4>
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
