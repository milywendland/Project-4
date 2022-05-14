import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MILCONSOLECOM from '../images/MILCONSOLECOM.png'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [pet, setPet] = useState('')

  useEffect(() => {
    const getPetByUserId = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/gameplay/${id}`
      )
      console.log(response.data)
      setPet(response.data.user.pets)
    }
    getPetByUserId()
  }, [id])

  // let petDead = false
  // let hunger = 0
  // let boredom = 0
  // let pottymeter = 0

  // const checkPetStatus = () => {
  //   petStatus = setInterval(function () {
  //     if (pet.maxhealth === 0) {
  //       petDead = true
  //       endIntervals()
  //     }
  //     if (pet.age === 25) {
  //       killPet()
  //     }
  //   }, 2000)
  // }

  // const endIntervals = () => {
  //   clearInterval(ageInterval)
  //   clearInterval(petStatus)
  //   clearInterval(hungerInterval)
  //   clearInterval(boredomInteral)
  // }

  // const feedPet = () => {
  //   if (hunger > 1) {
  //     hunger--
  //   }
  // }

  // const playWithPet = () => {
  //   if (boredom > 1) {
  //     boredom--
  //   }
  // }

  // const goPotty = () => {
  //   if (pottymeter > 1) {
  //     pottymeter--
  //   }
  // }

  // const killPet = () => {
  //   alert(message, 'Your pet has died')
  // }

  return user && authenticated ? (
    <div>
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
        <div className="left-button"></div>
        <div className="right-button"></div>
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
